<!-- 所有预约 -->
<script setup>
import { reactive } from 'vue';
import calendar from '@/components/common/calendar.vue';
import tableBox from '@/components/common/table.vue';
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { isContent } from '@/utils/index';

const calendarOptions = reactive({
    dateTime: new Date(),
    dataArr: [
        {
            date: '2023-08-14',
            starTime: '10:00',
            endTime: '10:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-20',
            starTime: '09:00',
            endTime: '12:00',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-18',
            starTime: '12:00',
            endTime: '12:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-18',
            starTime: '15:00',
            endTime: '16:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-06-18',
            starTime: '08:00',
            endTime: '12:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-06-12',
            starTime: '10:00',
            endTime: '12:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-06-18',
            starTime: '12:00',
            endTime: '15:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-09-10',
            starTime: '15:00',
            endTime: '19:00',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2022-09-10',
            starTime: '08:00',
            endTime: '19:00',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
        {
            date: '2023-11-21',
            starTime: '08:00',
            endTime: '13:00',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
        {
            date: '2023-11-22',
            starTime: '08:00',
            endTime: '13:00',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
        {
            date: '2023-11-26',
            starTime: '18:00',
            endTime: '20:00',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
        {
            date: '2023-11-26',
            starTime: '12:00',
            endTime: '17:30',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
        {
            date: '2023-11-26',
            starTime: '08:00',
            endTime: '11:30',
            name: '接待室',
            content: 'wangyi/项目会议',
        },
    ],
    selectData: {},
});
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowSwitchBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'select',
            prop: 'direction',
            placeholder: '会议室编号',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '应急预案',
                    value: '0',
                },
                {
                    label: '出场',
                    value: '1',
                },
            ],
        },
        {
            type: 'select',
            prop: 'Entrance',
            placeholder: '预约单位',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '较轻',
                    value: '0',
                },
                {
                    label: '严重',
                    value: '1',
                },
            ],
        },
        {
            type: 'datePicker',
            prop: 'datePicker',
            placeholder: '预约时间',
            style: {
                width: '130px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
                floor: '9月安全培训',
                company: '2020-09-01 08:30至09:30',
                berthState: '10人',
                person: '管理员',
                content: '巴士集团第三分公司',
                staet: '已取消',
                remarks: '',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
                floor: '9月安全培训',
                company: '2020-09-01 08:30至09:30',
                berthState: '10人',
                person: '管理员',
                content: '巴士集团第三分公司',
                staet: '已取消',
                remarks: '',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
                floor: '9月安全培训',
                company: '2020-09-01 08:30至09:30',
                berthState: '10人',
                person: '管理员',
                content: '巴士集团第三分公司',
                staet: '已取消',
                remarks: '',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
                floor: '9月安全培训',
                company: '2020-09-01 08:30至09:30',
                berthState: '10人',
                person: '管理员',
                content: '巴士集团第三分公司',
                staet: '已取消',
                remarks: '',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
                floor: '9月安全培训',
                company: '2020-09-01 08:30至09:30',
                berthState: '10人',
                person: '管理员',
                content: '巴士集团第三分公司',
                staet: '已取消',
                remarks: '',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '会议室编号',
            },
            {
                prop: 'bimCode',
                label: '会议室名称',
            },
            {
                prop: 'berthType',
                label: '所在楼层',
            },
            {
                prop: 'floor',
                label: '会议主题',
            },
            {
                prop: 'company',
                label: '预约时间',
                width: 200,
            },
            {
                prop: 'berthState',
                label: '参与人数',
            },
            {
                prop: 'person',
                label: '预约人',
            },
            {
                prop: 'content',
                label: '预约单位',
            },
            {
                prop: 'staet',
                label: '审批状态',
            },
            {
                prop: 'remarks',
                label: '备注',
            },
        ],
        isSerialNumber: true,
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <div class="allAppointments">
        <tableBox v-model:tableFromOption="tableFromOption" />
        <div class="calendarControl" v-if="!tableFromOption.isShowTable">
            <calendar v-model:calendarOptions="calendarOptions" />
            <detailsInforStyle class="infor">
                <template #name>预约信息</template>
                <template #main>
                    <ul class="mainList">
                        <li>
                            <span class="label">会议室编号：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">会议室名称：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">所在楼层：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">会议主题：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">参与人数：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">预约人：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">预约单位：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">预约时间：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.date) }}
                                {{ isContent(calendarOptions.selectData.starTime) }}至{{
                                    isContent(calendarOptions.selectData.endTime)
                                }}
                            </span>
                        </li>
                        <li>
                            <span class="label">审批状态：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                        <li>
                            <span class="label">备注：</span>
                            <span class="value">
                                {{ isContent(calendarOptions.selectData.name) }}
                            </span>
                        </li>
                    </ul>
                    <div class="btnClick">
                        <div class="programsBtn">修改预约</div>
                        <div class="programsBtn">取消预约</div>
                        <div class="programsBtn">打印</div>
                    </div>
                </template>
            </detailsInforStyle>
        </div>
    </div>
</template>

<style scoped lang="scss">
.allAppointments {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .calendarControl {
        width: 100%;
        height: calc(100% - 42px);
        display: flex;
        .infor {
            width: 600px;
            height: 100%;
            margin-left: 20px;

            .mainList {
                width: 100%;
                height: calc(100% - 52px);
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-template-rows: repeat(11, 1fr);

                li {
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    .label {
                        text-align: right;
                        min-width: 130px;
                    }
                    .value {
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>
