<!-- 空间管理 -->
<script setup lang="jsx">
import floorData from '@/assets/floor.json';
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
const floorList = floorData.value;
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isQueryBtn: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    otherBtnList: [
        {
            name: '导出',
            handlerClick: () => {
                alert('导出');
            },
        },
        {
            name: '导入',
            handlerClick: () => {
                alert('导入');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'code',
            placeholder: '请输入房间编号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'name',
            placeholder: '请输入房间名称',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: 'HT电梯机房',
                berthCodess: 'S11-2',
                berthType: '一层',
                number: '10.65',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: '太阳能储水箱',
                berthCodess: 'LT7楼梯间',
                berthType: '一层',
                number: '33.78',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: 'HT电梯机房',
                berthCodess: 'S11-2',
                berthType: '一层',
                number: '10.65',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: '太阳能储水箱',
                berthCodess: 'LT7楼梯间',
                berthType: '一层',
                number: '33.78',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: 'HT电梯机房',
                berthCodess: 'S11-2',
                berthType: '一层',
                number: '10.65',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: '太阳能储水箱',
                berthCodess: 'LT7楼梯间',
                berthType: '一层',
                number: '33.78',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: 'HT电梯机房',
                berthCodess: 'S11-2',
                berthType: '一层',
                number: '10.65',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
            {
                berthCode: '太阳能储水箱',
                berthCodess: 'LT7楼梯间',
                berthType: '一层',
                number: '33.78',
                brand: '设备间',
                position: '1',
                floor: '',
                notes: '柴油发电机房',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '房间区域名称',
            },
            {
                prop: 'berthCodess',
                label: '房间编号',
                width: 140,
            },
            {
                prop: 'berthType',
                label: '所属楼层',
                width: 120,
            },
            {
                prop: 'number',
                label: '实际面积',
            },
            {
                prop: 'brand',
                label: '功能属性',
            },
            {
                prop: 'position',
                label: '类型',
                width: 100,
            },
            {
                prop: 'floor',
                label: '所属单位',
            },
            {
                prop: 'notes',
                label: '备注',
            },
        ],
        isSerialNumber: true,
        isMultiple: true,
        selectionChangeList: [],
        operatesBtnObj: {
            width: 100,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    dialogStore.$patch({
                                        detailsDialogInfor: {
                                            title: '修改空间区域',
                                            isShow: true,
                                            isUpdate: true,
                                            obj: { ...row },
                                            width: 750,
                                            height: 538,
                                            path: '/assetManagement/rightPageDiglog/addSpaceManagement',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
                    hasPermi: ['update'],
                },
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    alert('删除');
                                }}
                            >
                                删除
                            </el-link>
                        );
                    },
                    hasPermi: ['del'],
                },
            ],
        },
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
function handlerClickFloor(value) {
    if (tableFromOption.modelFormValue.floorNum == value.name) {
        tableFromOption.modelFormValue.floorNum = '';
    } else {
        tableFromOption.modelFormValue.floorNum = value.name;
    }
}
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增空间区域',
            isShow: true,
            width: 750,
            height: 538,
            path: '/assetManagement/rightPageDiglog/addSpaceManagement',
        },
    });
};
</script>

<template>
    <div class="spaceManagement">
        <div class="left">
            <ul>
                <li
                    v-for="item in floorList"
                    :key="item.name"
                    :class="{ active: item.name === tableFromOption.modelFormValue.floorNum }"
                    @click="handlerClickFloor(item)"
                >
                    {{ item.floorName }}
                </li>
            </ul>
        </div>
        <div class="right">
            <tableBox
                v-model:tableFromOption="tableFromOption"
                @handlerClickAdd="handlerClickAdd"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.el-table__header .el-checkbox) {
    display: none;
}
:deep(.el-table__header thead tr) {
    th:nth-child(2) .cell {
        &::after {
            content: '操作';
        }
    }
}
.spaceManagement {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 100px;
        margin-right: 20px;
        ul {
            width: 100%;
            padding: 10px 10px;
            box-sizing: border-box;
            border: 1px solid rgba(27, 117, 146, 0.5);
            font-weight: 400;
            font-size: 16px;
            text-align: center;
            color: #ffffff;
            li {
                height: 32px;
                line-height: 32px;
                margin-bottom: 10px;
                cursor: pointer;
                &.active {
                    background: linear-gradient(
                        to right,
                        rgba(31, 255, 147, 0),
                        rgba(31, 255, 147, 0.5)
                    );
                }
            }
            li:last-child {
                margin-bottom: 0px;
            }
        }
    }
    .right {
        width: calc(100% - 120px);
        height: 100%;
    }
}
</style>
