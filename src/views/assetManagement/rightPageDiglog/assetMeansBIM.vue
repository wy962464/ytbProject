<!-- 资产BIM -->
<script setup>
import floorList from '@/components/common/floorList.vue';
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { ref, reactive } from 'vue';

let floorName = ref('--');
const handlerClickTree = obj => {
    floorName.value = obj.floorName;
};
let data = reactive([
    {
        id: 1,
        label: '低压供配电系统',
        children: [
            {
                id: 2,
                label: '动力照明配电箱',
                children: [
                    {
                        id: 3,
                        label: '动力配电箱',
                    },
                    {
                        id: 4,
                        label: '室内暗装照明配电箱',
                    },
                    {
                        id: 5,
                        label: '照明配电箱',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        label: '弱点系统',
        children: [
            {
                id: 7,
                label: '9F集调中心大屏幕系统',
            },
            {
                id: 8,
                label: '巡更系统',
            },
            {
                id: 9,
                label: '有线电视',
            },
            {
                id: 10,
                label: '楼宇设备自控',
            },
            {
                id: 11,
                label: '消防安保控制室大屏幕',
            },
        ],
    },
]);
const handleCurrentChange = (data, node) => {
    if (!data.children) {
        console.log(data, node);
    }
};
</script>

<template>
    <div class="assetMeansBIM">
        <div class="assetMeansBIMTree">
            <detailsInforStyle>
                <template #name>
                    当前楼层
                    <span class="floorName">{{ floorName }}</span>
                </template>
                <template #main>
                    <el-scrollbar>
                        <el-tree
                            ref="treeRef"
                            :data="data"
                            default-expand-all
                            icon="ArrowRightBold"
                            node-key="id"
                            :current-node-key="2"
                            @current-change="handleCurrentChange"
                        >
                            <template v-slot="{ node, data }">
                                <span
                                    class="ellipsis"
                                    v-text="node.label"
                                    :title="node.label"
                                ></span>
                            </template>
                        </el-tree>
                    </el-scrollbar>
                </template>
            </detailsInforStyle>
        </div>
        <floorList style="z-index: 1" top="20" @handlerClickTree="handlerClickTree" />
        <div class="dateProcess"></div>
    </div>
</template>

<style scoped lang="scss">
.assetMeansBIM {
    width: 100%;
    height: 100%;
    .dateProcess {
        height: 260px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #00000075;
    }
    .assetMeansBIMTree {
        position: absolute;
        width: 330px;
        height: calc(100% - 20px);
        top: 20px;
        right: 30px;
        background: #020d16d3;
        z-index: 1;
        .floorName {
            font-weight: 500;
            font-size: 20px;
            text-align: left;
            color: #00ff84;
            margin-left: 10px;
        }
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
