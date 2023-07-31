<!-- 应急响应程序 -->
<script setup lang="jsx">
import { reactive, onMounted } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';
import { isContent } from '@/utils/index';

const dialogStore = DialogStore();
function handlerClickAdd() {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增应急预案',
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
    isQueryBtn: true,
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
                list: [
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
                list: [
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
                list: [
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
        serialNumber: true,
        isRowClick: true,
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
let details = reactive({
    list: [],
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
        <div class="details">
            <div class="card-title">
                <div class="card-name">详细信息</div>
                <div class="card-line"></div>
            </div>
            <div class="card-main">
                <el-scrollbar>
                    <div class="reason" v-for="item in details.list">
                        <div class="lable">{{ isContent(item.lable) }}：</div>
                        <div class="value">
                            {{ isContent(item.value) }}
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
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
    .details {
        width: 500px;
        height: 100%;
        box-sizing: border-box;
        padding-top: 20px;
        margin-left: 20px;
        box-shadow: 0 0 30px 0 #041d2c inset;
        .card-title {
            width: 100%;
            height: 22px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            box-sizing: border-box;
            .card-name {
                height: 16px;
                line-height: 16px;
                font-weight: 500;
                font-size: 16px;
                text-align: left;
                color: #ffffff;
                margin-bottom: 5px;
                &::before {
                    content: '';
                    display: inline-block;
                    width: 3px;
                    height: 16px;
                    background-color: #24fdfa;
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
            .card-line {
                height: 1px;
                width: 100%;
                background: url('@/assets/images/pageImages/titleLine.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        .card-main {
            box-sizing: border-box;
            height: calc(100% - 22px);
            width: 100%;
            padding: 30px 20px 25px 20px;
            font-weight: 400;
            font-size: 14px;
            text-align: left;
            color: #ffffff;
            line-height: 30px;

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
}
</style>
