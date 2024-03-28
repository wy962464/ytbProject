<!-- 应急响应程序 -->
<script setup lang="jsx">
import { reactive, onMounted } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';
import { isContent } from '@/utils/index';
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';

const dialogStore = DialogStore();
function handlerClickAdd() {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增应急响应程序',
            isShow: true,
            width: 700,
            height: 478,
            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/addEmergencyProcedures',
        },
    });
}
let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    isShowQueryBtn: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '处置措施',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'type',
            placeholder: '描述内容',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '防台风',
                berthCodess: '防台风处置措施',
                domainList: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                    {
                        lable: '程序2',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                    {
                        lable: '程序3',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                    {
                        lable: '程序4',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                ],
            },
            {
                berthCode: '防台风',
                berthCodess: '防台风处置措施',
                domainList: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                    {
                        lable: '程序2',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                ],
            },
            {
                berthCode: '防台风',
                berthCodess: '防台风处置措施',
                domainList: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                    },
                ],
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '处置措施',
            },
            {
                prop: 'berthCodess',
                label: '描述',
            },
        ],
        isSerialNumber: true,
        isRowClick: true,
        operatesBtnObj: {
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
                                            title: '修改应急响应程序',
                                            isShow: true,
                                            width: 700,
                                            height: 478,
                                            isUpdate: true,
                                            obj: row,
                                            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/addEmergencyProcedures',
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
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
let details = reactive({
    domainList: [],
});
function handleRowClick(row, column, cell, event) {
    for (let key in row) {
        if (details.hasOwnProperty(key)) {
            details[key] = row[key];
        }
    }
}
onMounted(() => {
    if (tableFromOption.tableObj.tableData && tableFromOption.tableObj.tableData.length > 0) {
        for (let key in tableFromOption.tableObj.tableData[0]) {
            if (details.hasOwnProperty(key)) {
                details[key] = tableFromOption.tableObj.tableData[0][key];
            }
        }
    }
});
</script>

<template>
    <div class="emergencyPlan">
        <tableBox
            class="tableStyle"
            v-model:tableFromOption="tableFromOption"
            @rowClick="handleRowClick"
            @handlerClickAdd="handlerClickAdd"
        />
        <detailsInforStyle class="detailStyle">
            <template #name>详细信息</template>
            <template #main>
                <el-scrollbar>
                    <div class="reason" v-for="(item, index) in details.domainList" :key="index">
                        <div class="lable">{{ isContent(item.lable) }}：</div>
                        <div class="value">
                            {{ isContent(item.value) }}
                        </div>
                    </div>
                </el-scrollbar>
            </template>
        </detailsInforStyle>
    </div>
</template>

<style scoped lang="scss">
.emergencyPlan {
    height: 100%;
    width: 100%;
    display: flex;
    .tableStyle {
        width: calc(100% - 520px);
        height: 100%;
    }
    .detailStyle {
        width: 500px;
        margin-left: 20px;
        .reason {
            display: flex;
            line-height: 18px;
            margin-top: 7px;
            .lable {
                white-space: nowrap;
            }
            .value {
                line-height: 20px;
            }
        }
    }
}
</style>
