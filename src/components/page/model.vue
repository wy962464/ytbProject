<script setup>
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { ThreeModel } from '@/store/modules/modelManager.js';
import * as THREE from 'three';
import { OrbitControls } from '@/assets/OrbitControls.js';
// 后处理相关
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// 解决加载后处理后的抗锯齿问题
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
//模型泛光
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// 引入扩展库CSS3DRenderer.js
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

import gsap from 'gsap';
import floorData from '@/assets/floor.json';
import { showLoading, hideLoading } from '@/utils/loading.js';

import {
    handleReturn,
    handleKeyDown,
    handleCameraP,
    animateCamera,
    close,
    floorInformation,
} from '@/utils/modelMethod.js';

const moonbay = ref(null);
const main = ref(null);
//生命周期钩子
onMounted(() => {
    moonbay.value.appendChild(externalModel().domElement);
    // 渲染结果CSS3Renderer.domElement
    moonbay.value.appendChild(css3Renderer.domElement);
    css3Renderer.domElement.style.position = 'absolute';
    css3Renderer.domElement.style.top = '0px';
    css3Renderer.domElement.style.pointerEvents = 'none';
});

/**
 * @basicConfiguration:THREEJS基础配置
 */
const threeModel = ThreeModel();
watch(
    () => threeModel.modelLoading,
    (newValue, oldValue) => {
        console.log(newValue, oldValue);
    },
    {
        immediate: true,
    }
);
// 场景
const scene = new THREE.Scene();
let canWidth = ref(window.innerWidth);
let canHeight = ref(window.innerHeight - 80);

// 相机
let camera = reactive({});
camera = new THREE.PerspectiveCamera(75, canWidth.value / canHeight.value, 1, 3000);
camera.position.set(-77.21076430892649, 91.93051414474087, 153.81490632197443);
camera.lookAt(0, 0, 0);
// 渲染器
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    physicallyCorrectLights: true,
    logarithmicDepthBuffer: true,
});
renderer.setSize(canWidth.value, canHeight.value);
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
// 解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.outputEncoding = THREE.sRGBEncoding;
// CSS 属性 touch-action 用于设置触摸屏用户如何操纵元素的区域 (例如，浏览器内置的缩放功能)。
renderer.domElement.style.touchAction = 'none';
// 模型表面产生条纹影响渲染效果，可以改变.shadowMap.type默认值优化
renderer.shadowMap.type = THREE.VSMShadowMap;

// 平行光
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(50, 100, 150);
scene.add(light);

// 点光源
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(-140, 140, 30);
pointLight.castShadow = true;
pointLight.shadow.camera.left = -50;
pointLight.shadow.camera.right = 50;
pointLight.shadow.camera.top = 200;
pointLight.shadow.camera.bottom = -100;
pointLight.shadow.camera.near = 0.5;
pointLight.shadow.camera.far = 8000;
pointLight.shadow.mapSize.x = 3072; // 定义阴影贴图的宽度和高度,必须为2的整数此幂
pointLight.shadow.mapSize.y = 3072; // 较高的值会以计算时间为代价提供更好的阴影质量
pointLight.shadow.bias = -0.0001; //解决条纹阴影的出现
scene.add(pointLight);

// 半球面光
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
hemiLight.position.set(200, 100, 100);
scene.add(hemiLight);

// 轨道控制器
let controls = reactive({});
controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = 0;
controls.enablePan = false;
// controls.enableZoom = false;
// 后期处理
const composer = new EffectComposer(renderer);
// 创建一个渲染器通道,场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 添加渲染器通道
composer.addPass(renderPass);

// 创建OutlinePass通道
const v2 = new THREE.Vector2(canWidth.value, canHeight.value);
const outlinePass = new OutlinePass(v2, scene, camera);
composer.addPass(outlinePass);
// Outlinepass描边样式
outlinePass.visibleEdgeColor.set(0xff8800);
// 高亮发光描边厚度
outlinePass.edgeThickness = 1.0;
// 高亮描边发光卡强度
outlinePass.edgeStrength = 5;
// 模型闪烁频率控制,默认0不闪烁
outlinePass.pulsePeriod = 0;
outlinePass.usePatternTexture = false; // 使用纹理
outlinePass.hiddenEdgeColor.set(0x190a05);

// 抗锯齿
let effectFXAA = new ShaderPass(FXAAShader);
effectFXAA.uniforms['resolution'].value.set(1 / canWidth.value, 1 / canHeight.value);
composer.addPass(effectFXAA);

// 窗口宽高发生改变
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    canWidth.value = main.value.clientWidth;
    canHeight.value = main.value.clientHeight;
    // 更新摄像头
    camera.aspect = canWidth.value / canHeight.value;
    // 更新摄像头的投影矩阵
    camera.updateProjectionMatrix();
    renderer.setSize(canWidth.value, canHeight.value);
    // 后期处理
    composer.setSize(canWidth.value, canHeight.value);
    // HTML标签css3Renderer.domElement尺寸重新设置
    css3Renderer.setSize(canWidth.value, canHeight.value);
    effectFXAA.uniforms['resolution'].value.set(1 / canWidth.value, 1 / canHeight.value);
}

// 场景天空盒
const textureCubeLoader = new THREE.CubeTextureLoader().setPath('/image/');
const textureCube = textureCubeLoader.load(['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']);
scene.background = textureCube;
scene.environment = textureCube;

// 创建一个CSS3渲染器CSS3DRenderer
const css3Renderer = new CSS3DRenderer();
css3Renderer.setSize(canWidth.value, canHeight.value);
/**
 * @predefinedCode:模型需要的场景信息
 */

//存放楼层模型
let groupList = reactive({});
groupList = new THREE.Group();
groupList.name = '分层的楼层';

// 定义图层用于切换场景后显示不同的模型
// 主图层,次要图层
let layers0 = new THREE.Layers();
let layers2 = new THREE.Layers();
layers0.set(0);
layers2.set(2);

// 定义当前场景信息
// 默认是场景,需要对应的摄像机坐标,对应的模型坐标
let sceneInformation = reactive({
    // 用于判断当前层级
    name: '外立面',
    // 用于判断是否返回楼层初始状态
    returnorNot: false,
    // 当前楼层信息
    floorName: null,
});

// 加载主要模型
function externalModel() {
    showLoading();
    const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(
        `/modelFile/facade.glb`,
        // 加载成功时的回调
        gltf => {
            gltf.scene.traverse(mesh => {
                if (mesh.isMesh) {
                    // 判断网格模型,批量设置参数
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    mesh.material = mesh.material.clone();
                    // 定义数据
                    mesh.ancestors = gltf.scene;
                }
                if (mesh.name == '附属建筑') {
                    mesh.material = new THREE.MeshLambertMaterial({
                        color: 0x41596a,
                        transparent: true,
                        opacity: 0.5,
                    });
                    const edges = new THREE.EdgesGeometry(mesh.geometry);
                    const edgesMaterial = new THREE.LineBasicMaterial({
                        color: 0x00ffff,
                    });
                    const line = new THREE.LineSegments(edges, edgesMaterial);
                    mesh.add(line);
                }
            });
            gltf.scene.name = '外立面';
            buildModel().then(res => {
                gltf.scene.children.push(res);
                gltf.scene.children.forEach(item => {
                    if (item.type == 'Group') {
                        item.children.forEach(sub => {
                            sub.ancestors = gltf.scene;
                        });
                    }
                });
                scene.add(gltf.scene);
            });
        }
    );
    floorModel();
    render();
    return renderer;
}
function floorModel() {
    const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
    let y = null;
    for (let i = 0; i < 13; i++) {
        switch (i) {
            case 0:
                y = '一';
                break;
            case 1:
                y = '二';
                break;
            case 2:
                y = '三';
                break;
            case 3:
                y = '四';
                break;
            case 4:
                y = '五';
                break;
            case 5:
                y = '六';
                break;
            case 6:
                y = '七';
                break;
            case 7:
                y = '八';
                break;
            case 8:
                y = '九';
                break;
            case 9:
                y = '十';
                break;
            case 10:
                y = '-1';
                break;
            case 11:
                y = '负二';
                break;
            case 12:
                y = '顶';
                break;
            default:
                break;
        }
        loader.load(
            `/modelFile/${y}层.glb`,
            // 加载成功时的回调
            gltf => {
                gltf.scene.traverse(mesh => {
                    if (mesh.isMesh) {
                        // 判断网格模型,批量设置参数
                        mesh.castShadow = true;
                        mesh.receiveShadow = true;

                        // 定义数据
                        mesh.ancestors = gltf.scene;
                    }
                    if (RegExp(/矩形梁/).test(mesh.name)) {
                        mesh.material.side = THREE.BackSide;
                        // mesh.material.visible = false;
                        // mesh.material.transparent = true;
                        // mesh.material.opacity = 0.5;
                    }
                });
                gltf.scene.name = i;
                if (gltf.scene.name == '10') {
                    gltf.scene.name = -1;
                }
                if (gltf.scene.name == '11') {
                    gltf.scene.name = -2;
                }
                if (gltf.scene.name == '12') {
                    gltf.scene.name = 10;
                }
                groupList.add(gltf.scene);
                if (groupList.children.length >= 13) {
                    groupList.layers = layers2;
                    groupList.children.forEach(item => {
                        console.log(item);
                        let parkingSpace = [];
                        let outDrop = [];
                        let withinDrop = [];
                        item.children.map(items => {
                            if (RegExp(/A6_/).test(items.name)) {
                                option.parkingSpace.push({
                                    name: items.name,
                                    position: items.position,
                                    rotation: items.rotation,
                                });
                                parkingSpace.push({
                                    name: items.name,
                                    position: items.position,
                                    rotation: items.rotation,
                                });
                            }
                            if (RegExp(/外6_/).test(items.name)) {
                                const coordinate = new THREE.Vector3(
                                    items.position.x,
                                    items.position.y,
                                    items.position.z
                                );
                                outDrop.push({ name: items.name, position: coordinate });
                            }
                            if (RegExp(/内6_/).test(items.name)) {
                                const coordinate = new THREE.Vector3(
                                    items.position.x,
                                    items.position.y,
                                    items.position.z
                                );
                                withinDrop.push({ name: items.name, position: coordinate });
                            }
                        });
                        if (parkingSpace.length > 0) {
                            busModel(parkingSpace, item).then(res => {
                                res.map(keys => {
                                    item.add(keys);
                                });
                                item.traverse(mesh => {
                                    mesh.layers = layers2;
                                });
                                hideLoading();
                            });
                        } else {
                            hideLoading();
                        }
                        if (outDrop.length > 0) {
                            outsideTrajectoryLine(outDrop, parkingSpace, item);
                        }
                        if (withinDrop.length > 0) {
                            withinTrajectoryLine(withinDrop, parkingSpace, item);
                        }
                        item.traverse(mesh => {
                            mesh.layers = layers2;
                        });
                    });
                    scene.add(groupList);
                    threeModel.$patch({
                        scene: scene,
                        camera: camera,
                        renderer: renderer,
                        controls: controls,
                        composer: composer,
                        groupList: groupList,
                        layers0: layers0,
                        layers2: layers2,
                        sceneInformation: sceneInformation,
                        modelLoading: true,
                    });
                }
                gltf.scene.children.forEach(item => {
                    if (item.type == 'Group') {
                        item.children.forEach(sub => {
                            sub.ancestors = gltf.scene;
                        });
                    }
                });
            }, // 加载过程中的回调函数
            xhr => {},
            // 加载出错的回调
            err => {
                console.error('An error happened');
            }
        );
    }
}
// 加载公交车模型
function busModel(busModelCoord, floor) {
    let busModelList = [];
    const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
    busModelList = busModelCoord.map(item => {
        return new Promise((resolve, reject) => {
            loader.load(
                `/modelFile/2wesBUS.glb`,
                // 加载成功时的回调
                gltf => {
                    gltf.scene.name = `${item.name}-公交车`;
                    gltf.scene.children[0].name = `${item.name}-公交车`;
                    gltf.scene.position.set(item.position.x, item.position.y, item.position.z);
                    gltf.scene.rotation.set(item.rotation._x, item.rotation._y, item.rotation._z);
                    gltf.scene.traverse(mesh => {
                        mesh.ancestors = floor;
                    });
                    resolve(gltf.scene);
                }, // 加载过程中的回调函数
                xhr => {},
                // 加载出错的回调
                err => {
                    console.error('An error happened');
                }
            );
        });
    });
    return Promise.all(busModelList);
}
// 加载车场建筑模型
function buildModel() {
    const dracoLoader = new DRACOLoader();
    const loader = new GLTFLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
    let buildModel = new Promise((resolve, reject) => {
        loader.load(
            `/modelFile/parkbuild.glb`,
            // 加载成功时的回调
            gltf => {
                resolve(gltf.scene);
            }, // 加载过程中的回调函数
            xhr => {},
            // 加载出错的回调
            err => {
                console.error('An error happened');
            }
        );
    });
    return buildModel;
}
// 渲染
function render() {
    controls.update();
    composer.render();
    css3Renderer.render(scene, camera);
    moveOnCurve();
    requestAnimationFrame(render);
}
let option = reactive({
    model: null,
    // 外轨迹线 进
    outsideCurve: [],
    // 内轨迹线 出
    withinCurve: [],
    // 进出状态 0:进 1：出
    status: 0,
    curve: null,
    points: [],
    progress: 0,
    modelPosition: null,
    parkingSpace: [],
});
function moveOnCurve() {
    if (option.model) {
        let selectBus = option.model.children[0]?.name.split('-')[0];
        let outsideBusCurve = option.outsideCurve.find(item => item.name == selectBus);
        let withinBusCurve = option.withinCurve.find(item => item.name == selectBus);
        if (option.status) {
            option.curve = withinBusCurve?.curve;
            option.points = withinBusCurve?.points;
        } else {
            option.curve = outsideBusCurve?.curve;
            option.points = outsideBusCurve?.points;
        }
        if (parseInt(option.progress) >= 1) {
            if (option.status == 0) {
                let name = option.modelPosition.name.slice(0, 5);
                let p = option.parkingSpace.find(item => name == item.name);
                option.model.rotation.set(p.rotation._x, p.rotation._y, p.rotation._z);
            } else {
                if (option.modelPosition.parent.parent) {
                    option.modelPosition.parent.parent.children.map(item => {
                        if (item.name == option.modelPosition.name) {
                            let arr = item.children[0].children.find(
                                item => item.name == '车辆信息'
                            );
                            arr.parent.remove(arr);
                            option.modelPosition.parent.parent.remove(item);
                        }
                    });
                }
            }
        } else {
            const tmpSpherePosition = option.curve.getPointAt(option.progress);
            // console.log(tmpSpherePosition);
            option.model.position.set(
                tmpSpherePosition.x,
                tmpSpherePosition.y,
                tmpSpherePosition.z
            );
            //这个部分是处理车的模型始终与切线相切，这样就能让车始终围绕曲线中心运动
            // 当前点在线条上的位置
            option.model.position.copy(tmpSpherePosition);
            // 返回一个点t在曲线上位置向量的法线向量
            const tangent = option.curve.getTangentAt(option.progress);
            // 位置向量和切线向量相加即为所需朝向的点向量
            const lookAtVec = tangent.add(tmpSpherePosition);
            option.model.lookAt(lookAtVec);
            option.progress += 0.001;
        }
    }
}
/**
 * @FunctionMethods:模型事件处理的方法
 */

let timer = null; //节流
function handleThrottle(fn, delay = 200) {
    if (timer == null) {
        timer = setTimeout(() => {
            fn();
            clearTimeout(timer);
            timer = null;
        }, delay);
    }
}
// 射线拾取模型 Raycaster
const raycaster = new THREE.Raycaster();
// 用于存放射线拾取到的模型数据
let selectedObjects = [];
let selectedObjectsGlow = [];
const mouse = new THREE.Vector2();
// 监听指针移动
renderer.domElement.addEventListener('pointermove', onPointerMove);
function onPointerMove(event) {
    let getBoundingClientRect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - getBoundingClientRect.left) / canWidth.value) * 2 - 1; // 标准设备横坐标
    mouse.y = -((event.clientY - getBoundingClientRect.top) / canHeight.value) * 2 + 1; // 标准设备纵坐标
    handleThrottle(instanceGlow);
}
// 处理辉光效果
function instanceGlow() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length !== 0 && intersects[0].object.type === 'Mesh') {
        if (selectedObjectsGlow.length > 0) {
            outlinePass.selectedObjects = [];
        }
        const selectedObjects = intersects[0].object;
        addSelectedObjectGlow(selectedObjects.parent);
        outlinePass.selectedObjects = selectedObjectsGlow;
    } else {
        outlinePass.selectedObjects = [];
        selectedObjectsGlow = [];
    }
}

// 处理存放射线拾取并且添加辉光效果的模型
function addSelectedObjectGlow(object) {
    selectedObjectsGlow = [];
    selectedObjectsGlow.push(object);
}
// 监听鼠标双击
renderer.domElement.addEventListener('dblclick', onpointerdown, false);
function onpointerdown(event) {
    //生成1~-1的xy轴向量
    let getBoundingClientRect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - getBoundingClientRect.left) / canWidth.value) * 2 - 1; // 标准设备横坐标
    mouse.y = -((event.clientY - getBoundingClientRect.top) / canHeight.value) * 2 + 1; // 标准设备纵坐标
    checkIntersection();
}
// 处理射线拾取模型
function checkIntersection() {
    // 使用一个新的原点和方向来更新射线
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length !== 0 && intersects[0].object.type === 'Mesh') {
        const selectedObject = intersects[0].object;
        addSelectedObject(selectedObject);
        if (sceneInformation.name == '外立面') {
            //楼层合并
            groupList.children.forEach(ele => {
                gsap.to(ele.position, {
                    y: 0,
                    duration: 1,
                });
            });
            if (selectedObject.name == '附属建筑') {
                animateCamera(
                    new THREE.Vector3(-23.15961456298828, 16.649621963500977, 21.961626052856445),
                    1500,
                    selectedObject
                );
            } else {
                sceneInformation.name = '建筑层';
                console.log(selectedObject);
                let wall = scene.getObjectByName('外立面');
                wall.traverse(mesh => (mesh.layers = layers2));
                groupList.layers = layers0;
                groupList.children.forEach(item => {
                    item.traverse(mesh => {
                        mesh.layers = layers0;
                    });
                });
                let posi = new THREE.Vector3(
                    -117.80254822296114,
                    97.66025528513018,
                    121.06519372942381
                );
                let mesh = { position: new THREE.Vector3(0, 0, 0) };
                animateCamera(posi, 1500, mesh);
            }
        } else if (sceneInformation.name == '建筑层') {
            close();
            //楼层合并
            groupList.children.forEach(ele => {
                gsap.to(ele.position, {
                    y: 0,
                    duration: 1,
                });
            });
            //判断点击的是那一层
            floorData.value.forEach(item => {
                if (item.name == selectedObject.ancestors.name) {
                    let arr = item.value.split(',');
                    let pos = new THREE.Vector3(arr[0], arr[1], arr[2]);
                    // 跳转楼层建筑场景和点击模型漫游是有分别的
                    sceneInformation.floorName = selectedObject.ancestors.name;
                    sceneInformation.name = '楼层';
                    groupList.layers = layers0;
                    groupList.children.forEach(item => {
                        if (item.name !== selectedObject.ancestors.name) {
                            item.traverse(mesh => {
                                mesh.layers = layers2;
                            });
                        } else {
                            floorInformation(item, selectedObject);
                        }
                    });
                    animateCamera(pos, 1500, selectedObject.ancestors);
                }
            });
        } else if (sceneInformation.name == '楼层') {
            close();
            /**
             * 第一层过滤:过滤出点击需要的模型和点击楼层模型
             * 第二层分情况:
             * 1.基于当前楼层的各个模型组进行过滤
             * 1-1.点击模型和对应模型组匹配
             * 2.把需要点击的模型放在一个组中，在与点击模型匹配
             */
            if (selectedObject.parent.name !== sceneInformation.floorName) {
                let integrity = selectedObject.parent;
                let selePosition = handleCameraP(integrity, camera.position);
                // let selePositionBus = handleBus(integrity);
                // animateCamera(selePositionBus, 2000, integrity);
                sceneInformation.returnorNot = true;
                threeModel.clickModel = integrity;
                console.log(sceneInformation.floorName);
                console.log(groupList.children);
                // console.log(selePositionBus);
                if (integrity.name.includes('公交车')) {
                    console.log(threeModel.filteringModel);
                    option.progress = 0;
                    option.model = integrity.parent;
                    option.modelPosition = integrity;
                    console.log(option.parkingSpace);
                    console.log(option);
                    let dialog = document.createElement('div');
                    dialog.className = 'domStyle';
                    dialog.innerText = '车辆信息';
                    const tag = new CSS3DObject(dialog);
                    tag.name = '车辆信息';
                    console.log(integrity);
                    if (integrity.type == 'Object3D') {
                        tag.position.set(0, 0, -360);
                        tag.rotation.set(-Math.PI / 2, Math.PI, Math.PI * 2);
                    } else {
                        tag.position.set(0, 400, 1480);
                    }
                    let isTag = integrity.children.some(item => item.name == '车辆信息');
                    if (!isTag) {
                        integrity.add(tag);
                    } else {
                        let arr = integrity.children.find(item => item.name == '车辆信息');
                        console.log(arr);
                        arr.parent.remove(arr);
                    }
                }
            }
            // RegExp 对象方法
            // test() 方法用于检索字符串中指定的值。返回 true 或 false。
            // var str = "123";
            // var reg = RegExp(/3/);
            // console.log(reg.test(str)); // true

            //exec() 方法用于检索字符串中的正则表达式的匹配。返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
            // var str = "123";
            // var reg = RegExp(/3/);
            // if (reg.exec(str)) {
            //   // 包含
            // }
        } else {
            console.log('左键双击报错');
        }
    }
}
// 处理存放射线拾取到的模型
function addSelectedObject(object) {
    selectedObjects = [];
    selectedObjects.push(object);
}
// 生成外轨迹线 进
function outsideTrajectoryLine(drop, parkingSpace, floor) {
    let dropList = drop.sort((a, b) => a.name.slice(3) - b.name.slice(3));
    parkingSpace.map(item => {
        let curve = new THREE.CurvePath();
        if (floor.name == 6) {
            const lineAll = new THREE.QuadraticBezierCurve3(
                dropList[0].position,
                dropList[1].position,
                dropList[2].position
            );
            curve.curves.push(lineAll);
            if (item.name == 'A7_27') {
                const line1 = new THREE.LineCurve3(dropList[2].position, dropList[12].position);
                const line2 = new THREE.LineCurve3(dropList[12].position, item.position);
                curve.curves.push(line1, line2);
            } else if (item.name == 'A7_28') {
                const line1 = new THREE.LineCurve3(dropList[2].position, dropList[13].position);
                const line2 = new THREE.LineCurve3(dropList[13].position, item.position);
                curve.curves.push(line1, line2);
            } else if (item.name == 'A7_47' || item.name == 'A7_48' || item.name == 'A7_49') {
                const line1 = new THREE.LineCurve3(dropList[2].position, dropList[3].position);
                const line2 = new THREE.LineCurve3(dropList[3].position, dropList[4].position);
                const line3 = new THREE.LineCurve3(dropList[4].position, dropList[5].position);
                const line4 = new THREE.LineCurve3(dropList[5].position, dropList[7].position);
                const line5 = new THREE.LineCurve3(
                    dropList[7].position,
                    new THREE.Vector3(31.29487419128418, item.position.y, item.position.z)
                );
                const line6 = new THREE.LineCurve3(
                    new THREE.Vector3(31.29487419128418, item.position.y, item.position.z),
                    item.position
                );
                curve.curves.push(line1, line2, line3, line4, line5, line6);
            } else if (item.name == 'A7_50') {
                const line1 = new THREE.LineCurve3(dropList[2].position, dropList[3].position);
                const line2 = new THREE.LineCurve3(dropList[3].position, dropList[4].position);
                const line3 = new THREE.LineCurve3(dropList[4].position, dropList[5].position);
                const line4 = new THREE.LineCurve3(dropList[5].position, dropList[7].position);
                const line5 = new THREE.LineCurve3(
                    dropList[7].position,
                    new THREE.Vector3(31.29487419128418, item.position.y, item.position.z)
                );
                const line6 = new THREE.LineCurve3(
                    new THREE.Vector3(31.29487419128418, item.position.y, item.position.z),
                    item.position
                );
                curve.curves.push(line1, line2, line3, line4, line5, line6);
            } else {
                const line1 = new THREE.LineCurve3(dropList[2].position, dropList[3].position);
                const line2 = new THREE.LineCurve3(dropList[3].position, dropList[4].position);
                const line3 = new THREE.LineCurve3(dropList[4].position, dropList[5].position);
                const line4 = new THREE.LineCurve3(
                    dropList[5].position,
                    new THREE.Vector3(item.position.x, item.position.y, -4.323123931884766)
                );
                const line5 = new THREE.LineCurve3(
                    new THREE.Vector3(item.position.x, item.position.y, -4.323123931884766),
                    item.position
                );
                curve.curves.push(line1, line2, line3, line4, line5);
            }
        } else {
            const lineAll1 = new THREE.QuadraticBezierCurve3(
                dropList[0].position,
                dropList[1].position,
                dropList[2].position
            );
            const lineAll2 = new THREE.LineCurve3(dropList[2].position, dropList[4].position);
            curve.curves.push(lineAll1, lineAll2);
            if (item.name == 'A6_39') {
                const line1 = new THREE.LineCurve3(dropList[4].position, dropList[7].position);
                const line2 = new THREE.LineCurve3(
                    dropList[7].position,
                    new THREE.Vector3(31.146900177001953, item.position.y, item.position.z)
                );
                const line3 = new THREE.LineCurve3(
                    new THREE.Vector3(31.146900177001953, item.position.y, item.position.z),
                    item.position
                );
                curve.curves.push(line1, line2, line3);
            } else {
                const line1 = new THREE.LineCurve3(
                    dropList[4].position,
                    new THREE.Vector3(item.position.x, item.position.y, -4.25924015045166)
                );
                const line2 = new THREE.LineCurve3(
                    new THREE.Vector3(item.position.x, item.position.y, -4.25924015045166),
                    item.position
                );
                curve.curves.push(line1, line2);
            }
        }
        let points = curve.getPoints(500);
        option.outsideCurve.push({ name: item.name, curve: curve, points: points });
    });
    option.outsideCurve.map(item => {
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints(item.points);
        const material = new THREE.LineBasicMaterial({
            color: 0xf00,
        });
        const curveObject = new THREE.Line(geometry, material);
        curveObject.name = `${item.name}外轨迹线`;
        scene.add(curveObject);
    });
}
// 生成内轨迹线
function withinTrajectoryLine(drop, parkingSpace, floor) {
    let dropList = drop.sort((a, b) => a.name.slice(3) - b.name.slice(3));
    parkingSpace.map(item => {
        let curve = new THREE.CurvePath();
        if (floor.name == 6) {
            if (item.name == 'A7_27') {
                const line1 = new THREE.LineCurve3(item.position, dropList[0].position);
                const line2 = new THREE.LineCurve3(dropList[0].position, dropList[2].position);
                const line3 = new THREE.QuadraticBezierCurve3(
                    dropList[2].position,
                    dropList[3].position,
                    dropList[4].position
                );
                const line4 = new THREE.LineCurve3(dropList[4].position, dropList[6].position);
                const line5 = new THREE.LineCurve3(dropList[6].position, dropList[7].position);
                const line6 = new THREE.LineCurve3(dropList[7].position, dropList[8].position);
                const line7 = new THREE.QuadraticBezierCurve3(
                    dropList[8].position,
                    dropList[9].position,
                    dropList[10].position
                );
                curve.curves.push(line1, line2, line3, line4, line5, line6, line7);
            } else if (item.name == 'A7_28') {
                const line1 = new THREE.LineCurve3(item.position, dropList[1].position);
                const line2 = new THREE.LineCurve3(dropList[1].position, dropList[2].position);
                const line3 = new THREE.QuadraticBezierCurve3(
                    dropList[2].position,
                    dropList[3].position,
                    dropList[4].position
                );
                const line4 = new THREE.LineCurve3(dropList[4].position, dropList[6].position);
                const line5 = new THREE.LineCurve3(dropList[6].position, dropList[7].position);
                const line6 = new THREE.LineCurve3(dropList[7].position, dropList[8].position);
                const line7 = new THREE.QuadraticBezierCurve3(
                    dropList[8].position,
                    dropList[9].position,
                    dropList[10].position
                );
                curve.curves.push(line1, line2, line3, line4, line5, line6, line7);
            } else if (item.name == 'A7_47' || item.name == 'A7_48' || item.name == 'A7_49') {
                const line1 = new THREE.LineCurve3(
                    item.position,
                    new THREE.Vector3(25.073400497436523, item.position.y, item.position.z)
                );
                const line2 = new THREE.LineCurve3(
                    new THREE.Vector3(25.073400497436523, item.position.y, item.position.z),
                    dropList[8].position
                );
                const line3 = new THREE.QuadraticBezierCurve3(
                    dropList[8].position,
                    dropList[9].position,
                    dropList[10].position
                );
                curve.curves.push(line1, line2, line3);
            } else if (item.name == 'A7_50') {
                const line1 = new THREE.LineCurve3(item.position, dropList[12].position);
                const line2 = new THREE.LineCurve3(dropList[12].position, dropList[9].position);
                const line3 = new THREE.LineCurve3(dropList[9].position, dropList[10].position);
                curve.curves.push(line1, line2, line3);
            } else {
                const line1 = new THREE.LineCurve3(
                    item.position,
                    new THREE.Vector3(item.position.x, item.position.y, -9.315993309020996)
                );
                const line2 = new THREE.LineCurve3(
                    new THREE.Vector3(item.position.x, item.position.y, -9.315993309020996),
                    dropList[6].position
                );
                const line3 = new THREE.LineCurve3(dropList[6].position, dropList[7].position);
                const line4 = new THREE.LineCurve3(dropList[7].position, dropList[8].position);
                const line5 = new THREE.QuadraticBezierCurve3(
                    dropList[8].position,
                    dropList[9].position,
                    dropList[10].position
                );
                curve.curves.push(line1, line2, line3, line4, line5);
            }
            const lineAll = new THREE.LineCurve3(dropList[10].position, dropList[11].position);
            curve.curves.push(lineAll);
        }
        let points = curve.getPoints(500);
        option.withinCurve.push({ name: item.name, curve: curve, points: points });
    });
    option.withinCurve.map(item => {
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints(item.points);
        const material = new THREE.LineBasicMaterial({
            color: 0xf00,
        });
        const curveObject = new THREE.Line(geometry, material);
        curveObject.name = `${item.name}内轨迹线`;
        scene.add(curveObject);
    });
}

/**
 * @Description:对园区,建筑,楼层三个场景的点击鼠标右键分别处理不同代码
 */
renderer.domElement.addEventListener('mousedown', handleReturn, false);
// 添加按键时走动
document.addEventListener('keydown', handleKeyDown, false);

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
    renderer.domElement.removeEventListener('keydown', handleReturn);
});
</script>

<template>
    <div ref="main" style="width: 100%; height: 100%">
        <div id="moonbay" ref="moonbay"></div>
    </div>
</template>

<style scoped lang="scss"></style>
<style lang="scss">
.domStyle {
    width: 300px;
    height: 300px;
    line-height: 36px;
    text-align: center;
    font-size: 40px;
    z-index: 0;
    background: rgba(20, 143, 221, 0.68);
    box-shadow: 0px 0px 12px rgba(0, 128, 255, 0.75);
    border: 1px solid rgba(127, 177, 255, 0.75);
    padding: 20px;
    color: #efefef;
    white-space: wrap;
    position: relative;
    box-sizing: border-box;
}
.domStyle::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -100px;
    transform: translate(-50%, 0);
    display: block;
    width: 5px;
    height: 100px;
    background: rgba(127, 176, 255, 0.712);
}
.domStyle::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(127, 176, 255, 0.712);
    bottom: -120px;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>
