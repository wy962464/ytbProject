<!-- 文件管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let data = reactive([
    {
        id: 1,
        label: 'doc文档',
        children: [
            {
                id: 2,
                label: '类别一',
            },
            {
                id: 3,
                label: '类别二',
            },
            {
                id: 4,
                label: '类别三',
            },
            {
                id: 5,
                label: '类别四',
            },
        ],
    },
    {
        id: 6,
        label: 'excel文档',
        children: [
            {
                id: 7,
                label: '类别一',
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
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '文件标题',
            style: {
                width: '140px',
            },
        },
        {
            type: 'input',
            prop: 'names',
            placeholder: '文件内容',
            style: {
                width: '140px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '标题XXX1',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },
            {
                berthCode: '标题XXX2',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },
            {
                berthCode: '标题XXX3',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },

            {
                berthCode: '标题XXX4',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },
            {
                berthCode: '标题XXX5',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },
            {
                berthCode: '标题XXX6',
                berthCodess: 'doc文档',
                berthType: '智能调度专题会议',
                number: '钱多多',
                brand: '2023-07-19 15:00:00',
                position: '无',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '文档标题',
            },
            {
                prop: 'berthCodess',
                label: '文档类型',
            },
            {
                prop: 'berthType',
                label: '文档内容',
            },
            {
                prop: 'number',
                label: '上传人',
            },
            {
                prop: 'brand',
                label: '上传时间',
            },
            {
                prop: 'position',
                label: '备注',
            },
        ],
        isSerialNumber: true,
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
                                            title: '修改文件',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 750,
                                            height: 759,
                                            obj: row,
                                            path: '/setUp/management/fileManagement/addFileManagement',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
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
                },
            ],
        },
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handleCurrentChange = (data, node) => {
    if (!data.children) {
        console.log(data, node);
    }
};
const handlerClickClassification = () => {
    alert('新增分类');
};
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增文件',
            isShow: true,
            width: 750,
            height: 759,
            path: '/setUp/management/fileManagement/addFileManagement',
        },
    });
};
</script>

<template>
    <div class="fileManagement">
        <div class="left">
            <div class="top">
                <div class="top_left">文件分类</div>
                <div class="top_right" @click="handlerClickClassification">新增分类</div>
            </div>
            <div class="bottom">
                <el-scrollbar>
                    <el-tree
                        ref="treeRef"
                        :data="data"
                        default-expand-all
                        icon="ArrowRightBold"
                        node-key="id"
                        check-strictly
                        @current-change="handleCurrentChange"
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
                @handlerClickAdd="handlerClickAdd"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.fileManagement {
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
                :deep(.el-tree-node) {
                    .el-tree-node__content {
                        --el-tree-node-content-height: 32px;
                    }

                    .el-tree-node__content:hover {
                        background: linear-gradient(
                            to right,
                            rgba(31, 255, 147, 0),
                            rgba(31, 255, 147, 0.5)
                        ) !important;
                    }
                }
            }
        }
    }
    .right {
        width: calc(100% - 260px);
        box-sizing: border-box;
        padding-top: 10px;
    }
}
</style>
