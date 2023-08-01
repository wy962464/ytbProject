<!-- 资产清单管理 -->
<script setup>
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';

let data = reactive([
    {
        id: 1,
        label: '配电系统',
        children: [
            {
                id: 2,
                label: '低压柜',
            },
            {
                id: 3,
                label: '变压器',
            },
            {
                id: 4,
                label: '高压柜',
            },
            {
                id: 5,
                label: '补偿柜',
            },
        ],
    },
    {
        id: 6,
        label: '二供水系统',
        children: [
            {
                id: 7,
                label: '给水泵',
            },
        ],
    },
    {
        id: 8,
        label: '供排水系统',
        children: [
            {
                id: 9,
                label: '给水泵',
            },
        ],
    },
]);
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    otherBtnList: [
        {
            name: '更多操作',
            handlerClick: () => {
                alert('更多操作');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '请输入资产编号',
            style: {
                width: '140px',
            },
        },
        {
            type: 'input',
            prop: 'names',
            placeholder: '请输入资产名称',
            style: {
                width: '140px',
            },
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '选择楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一层',
                    value: '0',
                },
                {
                    label: '二层',
                    value: '1',
                },
                {
                    label: '三层',
                    value: '2',
                },
                {
                    label: '四层',
                    value: '3',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
            {
                berthCode: '低压柜',
                berthCodess: '6PDFZLP-21-11-128',
                berthType: '配电系统-低压柜',
                number: 'MNS',
                brand: '中科华能',
                position: '充电桩配电房',
                floor: '六楼',
                time: '2023-06',
                notes: '完好',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '资产名称',
            },
            {
                prop: 'berthCodess',
                label: '资产编号',
                width: 140,
            },
            {
                prop: 'berthType',
                label: '资产类别',
                width: 120,
            },
            {
                prop: 'number',
                label: '型号',
            },
            {
                prop: 'brand',
                label: '品牌',
            },
            {
                prop: 'position',
                label: '安装部位',
                width: 100,
            },
            {
                prop: 'floor',
                label: '所属楼层',
            },
            {
                prop: 'time',
                label: '安装时间',
            },
            {
                prop: 'notes',
                label: '备注',
            },
        ],
        serialNumber: true,
        isMultiple: true,
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handleCheckChange = (data, checked, indeterminate) => {
    if (!data.children) {
        console.log(data, checked, indeterminate);
    }
};
const handlerClickClassification = () => {
    alert('新增分类');
};
const handleSelectionChange = selectList => {
    console.log(selectList);
};
</script>

<template>
    <div class="inventoryManagement">
        <div class="left">
            <div class="top">
                <div class="top_left">资产分类</div>
                <div class="top_right" @click="handlerClickClassification">新增分类</div>
            </div>
            <div class="bottom">
                <el-scrollbar>
                    <el-tree
                        ref="treeRef"
                        :data="data"
                        default-expand-all
                        check-on-click-node
                        check-strictly
                        icon="ArrowRightBold"
                        @check-change="handleCheckChange"
                    >
                        <template v-slot="{ node, data }">
                            <span class="ellipsis" v-text="node.label" :title="node.label"></span>
                        </template>
                    </el-tree>
                </el-scrollbar>
            </div>
        </div>
        <div class="right">
            <tableBox
                v-model:tableFromOption="tableFromOption"
                @handleSelectionChange="handleSelectionChange"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.is-current > .el-tree-node__content) {
    background: linear-gradient(
        to right,
        rgba(31, 255, 147, 0),
        rgba(31, 255, 147, 0.5)
    ) !important;
}

.inventoryManagement {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 260px;
        height: 100%;
        margin-right: 20px;
        box-sizing: border-box;
        border: 1px solid rgba(27, 117, 146, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 10px 0px 10px;
        margin-right: 20px;
        .top {
            height: 43px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            .top_left {
                line-height: 43px;
                font-weight: 500;
                font-size: 16px;
                text-align: left;
                color: #ffffff;
            }
            .top_right {
                font-weight: 500;
                font-size: 12px;
                color: #1fff93;
                line-height: 43px;
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .bottom {
            flex-grow: 1;
            height: 0;
            width: 100%;
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
    .right {
        flex-grow: 1;
        box-sizing: border-box;
    }
}
</style>
