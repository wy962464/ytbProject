<!-- 摄像头清单 -->
<script setup>
import { ref, watch, reactive, inject, nextTick } from 'vue';

const treeRef = ref(null);
const refreshCurrentPage = inject('refresh');
let cameraList = reactive({ list: [], inputValue: '' });
const emit = defineEmits(['handlerClickView']);
const defaultProps = {
    children: 'children',
    label: 'label',
};
watch(
    () => cameraList.inputValue,
    val => {
        treeRef.value?.filter(val);
    }
);

const filterNode = (value, data) => {
    if (!value) return true;
    return data.label.includes(value);
};
const handleCheckChange = (data, checked, indeterminate) => {
    if (!data.children) {
        if (checked) {
            cameraList.list.push(data);
        } else {
            cameraList.list = cameraList.list.filter(item => item.id !== data.id);
        }
        emit('handlerClickView', []);
        refreshCurrentPage(false);
        nextTick(() => {
            emit('handlerClickView', cameraList.list);
            refreshCurrentPage(true);
        });
    }
};
let data = reactive([
    {
        id: 1,
        label: '按区域',
        children: [
            {
                id: 4,
                label: '进出口',
                children: [
                    {
                        id: 9,
                        label: '入口球机-南门',
                        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                        type: 'm3u8',
                    },
                    {
                        id: 10,
                        label: '出口球机-中门',
                        src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
                        type: 'video/mp4',
                    },
                    {
                        id: 11,
                        label: '备用出入口球机-北门',
                        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                        type: 'm3u8',
                    },
                    {
                        id: 12,
                        label: '1201-北门',
                        src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
                        type: 'video/mp4',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: '按楼层',
        children: [
            {
                id: 3,
                label: '负一层',
                children: [
                    {
                        id: 5,
                        label: '视频监控摄像机',
                        children: [
                            {
                                id: 6,
                                label: '001-电梯厅',
                            },
                            {
                                id: 7,
                                label: '002-弱点机房门外',
                            },
                            {
                                id: 8,
                                label: '003-货梯厅',
                            },
                            {
                                id: 13,
                                label: '004-电梯出口',
                            },
                            {
                                id: 14,
                                label: '005-风机房门外',
                            },
                            {
                                id: 15,
                                label: '006-X12车位',
                            },
                            {
                                id: 16,
                                label: '007-X03车位',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        label: '按区域',
        children: [
            {
                id: 4,
                label: '进出口',
                children: [
                    {
                        id: 9,
                        label: '入口球机-南门',
                        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                        type: 'm3u8',
                    },
                    {
                        id: 10,
                        label: '出口球机-中门',
                        src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
                        type: 'video/mp4',
                    },
                    {
                        id: 11,
                        label: '备用出入口球机-北门',
                        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                        type: 'm3u8',
                    },
                    {
                        id: 12,
                        label: '1201-北门',
                        src: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
                        type: 'video/mp4',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: '按楼层',
        children: [
            {
                id: 3,
                label: '负一层',
                children: [
                    {
                        id: 5,
                        label: '视频监控摄像机',
                        children: [
                            {
                                id: 6,
                                label: '001-电梯厅',
                            },
                            {
                                id: 7,
                                label: '002-弱点机房门外',
                            },
                            {
                                id: 8,
                                label: '003-货梯厅',
                            },
                            {
                                id: 13,
                                label: '004-电梯出口',
                            },
                            {
                                id: 14,
                                label: '005-风机房门外',
                            },
                            {
                                id: 15,
                                label: '006-X12车位',
                            },
                            {
                                id: 16,
                                label: '007-X03车位',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
</script>

<template>
    <div class="treeCamera">
        <el-input class="inputClass" placeholder="请输入" v-model="cameraList.inputValue" />
        <div class="bottom">
            <el-scrollbar>
                <el-tree
                    ref="treeRef"
                    :data="data"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    show-checkbox
                    check-on-click-node
                    check-strictly
                    @check-change="handleCheckChange"
                    icon="ArrowRightBold"
                >
                    <template v-slot="{ node, data }">
                        <span class="ellipsis" v-text="node.label" :title="node.label"></span>
                    </template>
                </el-tree>
            </el-scrollbar>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background-color: rgba(31, 255, 147, 0.8) !important;
    border-color: rgba(31, 255, 147, 0.8) !important;
}
:deep(.el-checkbox__inner) {
    background-color: rgba(2, 50, 64, 0.3) !important;
    border-color: rgba(15, 151, 103, 100) !important;
}
:deep(.el-checkbox) {
    --el-checkbox-disabled-checked-icon-color: rgba(255, 255, 255, 1);
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner::before) {
    background-color: rgba(0, 0, 0, 0);
}
:deep(.el-tree-node:focus > .el-tree-node__content) {
    background-color: rgba(0, 0, 0, 0) !important;
}

// 不可全选样式
:deep(.el-tree-node) {
    position: relative;
    .el-tree-node__content {
        padding-right: 35px;
    }
    .el-tree-node__content > label.el-checkbox {
        position: absolute;
        right: 0px;
        margin-right: 10px;
    }
    .is-leaf + .el-checkbox .el-checkbox__inner {
        display: inline-block;
    }
    .el-checkbox .el-checkbox__inner {
        display: none;
    }
}

.treeCamera {
    width: 100%;
    height: 100%;
    .inputClass {
        margin-bottom: 20px;
    }

    .bottom {
        height: calc(100% - 44px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .el-tree {
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0);
            flex-grow: 1;
            --el-tree-node-hover-bg-color: linear-gradient(
                to right,
                rgba(31, 255, 147, 0),
                rgba(31, 255, 147, 0.5)
            );
        }
    }
}
</style>
