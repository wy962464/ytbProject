<!-- 应急预案 -->
<script setup lang="jsx">
import { reactive, onMounted } from 'vue';
import tableBox from '@/components/common/table.vue';
import { isContent } from '@/utils/index';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
function handleRowClick(row, column, cell, event) {
    for (let key in row) {
        if (details.hasOwnProperty(key)) {
            details[key] = row[key];
        }
    }
}
function handlerClickFiring() {
    alert('启动应急预案');
}
function handlerClickAdd() {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增应急预案',
            isShow: true,
            width: 750,
            height: 478,
            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/addEmergencyPlan',
        },
    });
}
function handlerBasicInfor(row) {
    dialogStore.$patch({
        dialogInfor: {
            title: '应急预案',
            isShow: true,
            backBtn: true,
            handlerClickBack: () => {
                dialogStore.$patch({
                    dialogInfor: {
                        title: '应急预案',
                        isShow: true,
                        backBtn: false,
                        width: 1279,
                        height: 685,
                        tabSeletNum: 0,
                        path: [
                            {
                                name: '应急预案',
                                component:
                                    '/parkingSafety/rightPageDiglog/emergencyPlanContent/emergencyPlan',
                            },
                            {
                                name: '应急事件',
                                component:
                                    '/parkingSafety/rightPageDiglog/emergencyEventsContent/emergencyEvents',
                            },
                            {
                                name: '安全风险源',
                                component:
                                    '/parkingSafety/rightPageDiglog/securityRiskContent/securityRisk',
                            },
                        ],
                    },
                });
            },
            width: 1279,
            height: 685,
            obj: row,
            path: [
                {
                    name: '基本信息',
                    component:
                        '/parkingSafety/rightPageDiglog/emergencyPlanContent/emergencyPlanBasicInfor',
                },
                {
                    name: '应急响应程序',
                    component:
                        '/parkingSafety/rightPageDiglog/emergencyPlanContent/emergencyProcedures',
                },
            ],
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
            placeholder: '预案名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'type',
            placeholder: '预案类型',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '防台风应急预案',
                berthCodess: '天气',
                berthType: '台风',
                reason: `深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重。深圳地处临海，每年会遭受台风的袭击。台风来临时，风
            力大，破坏面广，损失严重。特大暴雨引起的城市内涝，
            造成交通中断、房屋倒塌、设施损坏，甚至人员伤亡，经
            济损失严重`,
            },
            {
                berthCode: '安全（反恐）专项应急预案',
                berthCodess: '反恐',
                berthType: '安全反恐',
                reason: '2313213213132',
            },
            {
                berthCode: '特种设备事故专项应急预案',
                berthCodess: '设备',
                berthType: '特种设备事故',
                reason: 'sssssssssssssssssssssssssssss',
            },
            {
                berthCode: '交通事故专项应急预案',
                berthCodess: '交通',
                berthType: '交通事故',
                reason: 'wwwwwwwwwwwwwwwwwwwwwwww',
            },
            {
                berthCode: '火灾事故专项应急预案',
                berthCodess: '消防',
                berthType: '火灾事故',
                reason: 'ppppppppppppppppp',
            },
            {
                berthCode: '车辆碰撞造成车道拥堵',
                berthCodess: '交通',
                berthType: '场内交通事故的应急处理',
                reason: '',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '预案名称',
                render: row => {
                    return (
                        <span style={{ color: '#00FF84' }} onClick={() => handlerBasicInfor(row)}>
                            {row.berthCode}
                        </span>
                    );
                },
            },
            {
                prop: 'berthCodess',
                label: '预案类型',
            },
            {
                prop: 'berthType',
                label: '适用事件',
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
                                            title: '修改应急预案',
                                            isShow: true,
                                            width: 750,
                                            height: 478,
                                            path: '/parkingSafety/rightPageDiglog/emergencyPlanContent/addEmergencyPlan',
                                            isUpdate: true,
                                            obj: row,
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
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
let details = reactive({
    berthCode: '',
    berthCodess: '',
    berthType: '',
    reason: '',
});
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
                <p>预案名称：{{ isContent(details.berthCode) }}</p>
                <p>预案类型：{{ isContent(details.berthCodess) }}</p>
                <p>适用事件：{{ isContent(details.berthType) }}</p>

                <div class="reason">
                    <div class="lable">事件原因：</div>
                    <el-scrollbar height="300px">
                        <div class="value">{{ isContent(details.reason) }}</div>
                    </el-scrollbar>
                </div>
            </div>
            <div
                class="card-bottom"
                v-if="
                    tableFromOption.tableObj.tableData &&
                    tableFromOption.tableObj.tableData.length > 0
                "
            >
                <div class="card-btn" @click="handlerClickFiring">启动应急预案</div>
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
                    margin-bottom: 5px;
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
            height: calc(100% - 22px - 100px);
            width: 100%;
            padding: 30px 20px 0 20px;
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
        .card-bottom {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            .card-btn {
                width: 120px;
                height: 42px;
                margin-top: 28px;
                border: 1px solid #275252;
                box-sizing: border-box;
                color: #ffffff;
                line-height: 37px;
                text-align: center;
                cursor: pointer;
                font-weight: 500;
                font-size: 14px;
                &:hover {
                    border: 1px solid #00ff84;
                    color: #00ff84;
                }
            }
        }
    }
}
</style>
