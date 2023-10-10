import * as THREE from 'three';
import gsap from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import floorData from '@/assets/floor.json';
import { ThreeModel } from '@/store/modules/modelManager.js';

const threeModel = ThreeModel();
const floorList = floorData.value;

/**
 * 功能介绍:楼层分层处理
 */
export function separate() {
    let wall = threeModel.scene.getObjectByName('外立面');
    let groupList = threeModel.groupList;
    wall.traverse(mesh => (mesh.layers = threeModel.layers2));
    groupList.layers = threeModel.layers0;
    threeModel.sceneInformation.name = '建筑层';
    groupList.children.forEach(ele => {
        ele.traverse(mesh => {
            mesh.layers = threeModel.layers0;
        });
        gsap.to(ele.position, {
            y: ele.name * 10,
            duration: 1,
        });
        labelDisplay(ele);
    });
    let posi = new THREE.Vector3(-50.90193776188113, 99.78068805152347, 160.6904308733663);
    let mesh = { position: new THREE.Vector3(0, 70, 0) };
    animateCamera(posi, 1500, mesh);
}
function labelDisplay(ele) {
    let arr = ele.children.find(ele => ele.name == '标签');
    if (!arr) {
        floorList.forEach(item => {
            if (ele.name === item.name) {
                let divDom = document.createElement('div');
                divDom.style.cssText = `
                  position:absolute;
                  top:10px;
                  left:10px;
                  width:90px;
                  height:36px;
                  line-height:36px;
                  background:url('image/floor.png') no-repeat;
                  background-size:100% 100%;
                `
                let div = document.createElement('div');
                div.style.cssText = `
                  text-align:center;
                  color:white;
                  font-size:14px;
                  padding-left:7px;
                  pointer-events:auto;
                `
                div.innerText = item.floorName;
                divDom.appendChild(div);
                document.body.appendChild(divDom);
                let y1 = ele.name * 5;
                const tag = new CSS3DObject(divDom);
                tag.name = '标签';
                tag.position.set(55, y1, 20);
                tag.scale.set(0.3, 0.3, 0.3);
                ele.add(tag);
            }
        });
    }
}
/**
 * 功能介绍:楼层合并处理
 */
export function close() {
    let groupList = threeModel.groupList;
    groupList.children.forEach(ele => {
        gsap.to(ele.position, {
            y: 0,
            duration: 1,
        });
    });
    tagHiding();
}

function tagHiding() {
    let groupList = threeModel.groupList;
    groupList.children.forEach(ele => {
        let arr = ele.children.find(ele => ele.name == '标签');
        if (arr) {
            arr.parent.remove(arr);
        } else {
            // console.log('标签不存在');
        }
    });
}
/**
 * 功能介绍:按钮跳转楼层
 */
export function buttonClick(data) {
    let wall = threeModel.scene.getObjectByName('外立面');
    let groupList = threeModel.groupList;
    floorList.forEach(item => {
        if (item.floorName === data.floorName) {
            let arr = item.value.split(',');
            let pos = new THREE.Vector3(arr[0], arr[1], arr[2]);
            let mesh = { position: new THREE.Vector3(0, 0, 0) };
            threeModel.sceneInformation.floorName = data.name;
            threeModel.sceneInformation.name = '楼层';
            wall.traverse(mesh => (mesh.layers = threeModel.layers2));
            groupList.layers = threeModel.layers0;
            groupList.children.forEach(item1 => {
                if (item1.name !== data.name) {
                    item1.traverse(mesh => (mesh.layers = threeModel.layers2));
                } else {
                    console.log(item1);
                    item1.traverse(mesh => (mesh.layers = threeModel.layers0));
                }
            });
            animateCamera(pos, 1000, mesh);
            console.log('我已进入到楼层,需要过滤能点击的模型');
        }
    });
    tagHiding();
}

//处理摄像机漫游后的落点坐标
export function handleCameraP(mesh, caa) {
    let selePosition = mesh.position.clone();
    //根据摄像机所处位置，做轴
    let newPosX = Math.floor(Math.abs(caa.x)) / 4;
    let newPosY = Math.floor(Math.abs(caa.y)) / 3;
    let newPosZ = Math.floor(Math.abs(caa.z)) / 4;
    if (caa.x > selePosition.x) {
        selePosition.x += newPosX;
    } else {
        selePosition.x += -newPosX;
    }
    if (caa.z > selePosition.z) {
        selePosition.z += newPosZ;
    } else {
        selePosition.z += -newPosZ;
    }
    if (caa.y > selePosition.y) {
        selePosition.y += newPosY;
    } else {
        selePosition.y += -newPosY;
    }
    return selePosition;
    // 计算该向量到所传入的v间的距离。
    // selePosition.distanceTo(pos);
}

// 处理点击公交车时的落点坐标
export function handleBus(mesh) {
    let selePosition = mesh.position.clone();
    selePosition.x += 2;
    selePosition.y += 3;
    selePosition.z += 24;
    return selePosition;
}

/**
 * 功能介绍:按钮跳转楼层动画
 */
export function animateCamera(newP, time, mesh) {
    // newP 最新的摄像机位置
    // mesh 对应的模型位置
    new TWEEN.Tween(threeModel.camera.position)
        .to({ x: newP.x, y: newP.y, z: newP.z }, time)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(obj => {
            // 动态改变相机位置
            threeModel.camera.position.set(obj.x, obj.y, obj.z);
            // 动态计算相机视线
            // threeModel.camera.lookAt(mesh.position);
            threeModel.controls.target.copy(mesh.position);
            threeModel.controls.update();
        })
        .onComplete(() => { })
        .start();
    animate();
    function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();
    }
}

/**
 * 功能介绍:右键点击返回上一个场景
 */
export function handleReturn(e) {
    if (e.button == 2) {
        // 分两种：
        // 一种是在楼层状态下点击模型跳转到模型上后，返回到楼层开始状态
        // 一种是：楼层：------》进入建筑：  ------》园区:
        if (threeModel.sceneInformation.name == '外立面') {
            threeModel.sceneInformation.floorName = null
            let posi = new THREE.Vector3(-77.21076430892649, 91.93051414474087, 153.81490632197443);
            let mesh = { position: new THREE.Vector3(0, 0, 0) };
            animateCamera(posi, 1500, mesh);
        } else if (threeModel.sceneInformation.name == '建筑层') {
            let wall = threeModel.scene.getObjectByName('外立面');
            wall.traverse(mesh => (mesh.layers = threeModel.layers0));
            threeModel.groupList.layers = threeModel.layers2;
            threeModel.groupList.children.forEach(item => {
                if (item.layers.mask == 1) item.traverse(mesh => (mesh.layers = threeModel.layers2));
            });
            threeModel.sceneInformation.name = '外立面';
            threeModel.sceneInformation.floorName = null
            close();
            let posi = new THREE.Vector3(-77.21076430892649, 91.93051414474087, 153.81490632197443);
            let mesh = { position: new THREE.Vector3(0, 0, 0) };
            animateCamera(posi, 1500, mesh);
        } else if (threeModel.sceneInformation.name == '楼层') {
            close();
            if (threeModel.sceneInformation.returnorNot) {
                console.log('12580');
                floorData.value.forEach(item => {
                    if (item.name == threeModel.sceneInformation.floorName) {
                        let arr = item.value.split(',');
                        let pos = new THREE.Vector3(arr[0], arr[1], arr[2]);
                        // 跳转楼层建筑场景和点击模型漫游是有分别的
                        let mesh = { position: new THREE.Vector3(0, 0, 0) };
                        animateCamera(pos, 1500, mesh);
                    }
                });
                threeModel.sceneInformation.returnorNot = false;
            } else {
                threeModel.sceneInformation.name = '建筑层';
                threeModel.groupList.children.forEach(item => {
                    if (item.layers.mask == 4) item.traverse(mesh => (mesh.layers = threeModel.layers0));
                });
                threeModel.sceneInformation.floorName = null
                let pos = new THREE.Vector3(
                    -117.80254822296114,
                    97.66025528513018,
                    121.06519372942381
                );
                let mesh = { position: new THREE.Vector3(0, 0, 0) };
                animateCamera(pos, 2000, mesh);
            }
        } else {
            console.log('右键报错');
        }
        e.preventDefault();
    }
}

/**
 * 功能介绍:按键时相机移动
 */
export function handleKeyDown(e) {
    var e = e || window.event;
    var keyCode = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if ('37, 38, 39, 40, 65, 87, 68, 83,81,69'.indexOf(keyCode) === -1) {
        return;
    } else {
        switch (e.keyCode) {
            case 37:
            case 65: //左
                CameraMove('x', -7.0);
                break;
            case 38:
            case 87: //上
                CameraMove('z', -7.0);
                break;
            case 39:
            case 68: //右
                CameraMove('x', 7.0);
                break;
            case 40:
            case 83: //下
                CameraMove('z', 7.0);
                break;
            case 81:
                CameraMove('y', 7.0);
                break;
            case 69:
                CameraMove('y', -7.0);
                break;
        }
        //81:Q 69:E
    }
}
function CameraMove(direction, distance) {
    threeModel.camera.position[direction] += distance;
}

/**
 * 功能介绍:获取坐标点
 */
export function cameraData() {
    // 相机控件.target属性在OrbitControls.js内部表示相机目标观察点，默认0,0,0
    console.log('controls.target', threeModel.controls.target);
    console.log('camera', threeModel.camera);
}

/**
 * 功能介绍:查看所有的图层模型
 */
function modelLayer() {
    camera.layers.enableAll();
}

/**
 * 功能介绍:用于进入楼层后获取楼层需要点击的模型数据
 */
export function floorInformation(itemArray, item) {
    let filteringModel = [];
    if (itemArray.children.length < 0) return;
    itemArray.children.forEach(item => {
        if (item.type === 'Group' || item.type === 'Object3D') {
            filteringModel.push(item);
        }
    });
    console.log('当前模型数据', item);
    threeModel.$patch({
        filteringModel: filteringModel,
    });
    console.log(threeModel.filteringModel);
}
