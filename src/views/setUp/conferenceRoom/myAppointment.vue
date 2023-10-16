<!-- 我的预约 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    modelFormValue: {},
    otherBtnList: [
        {
            name: '新增预约',
            handlerClick: () => {
                dialogStore.$patch({
                    detailsDialogInfor: {
                        title: '新增会议室预约',
                        isShow: true,
                        width: 750,
                        height: 580,
                        path: '/setUp/conferenceRoom/addAppointment',
                    },
                });
            },
        },
    ],
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
        operatesBtnObj: {
            width: 160,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    alert('修改预约');
                                }}
                            >
                                修改预约
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
                                    alert('取消预约');
                                }}
                            >
                                取消预约
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
</script>

<template>
    <div class="myAppointment">
        <tableBox v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.myAppointment {
    width: 100%;
    height: 100%;
}
</style>
