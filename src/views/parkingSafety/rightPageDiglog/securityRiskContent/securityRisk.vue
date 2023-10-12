<!-- 安全风险源 -->
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
    isBasicOperateBtn: true,
    modelFormValue: {},
    labelWidth: 0,
    fromItem: [
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: '风险源名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthName',
            rules: [],
            placeholder: '风险源地点',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '充电桩',
                bimCode: '充电桩消防应急预案',
                berthType: '高',
                floor: '二层',
                company: '二楼2-01泊位充电桩',
                berthState: '场站机电部',
                time: '刘谦',
                content: '场站仓库起火',
            },
            {
                berthCode: '台风',
                bimCode: '场站消防应急预案',
                berthType: '高',
                floor: '二层',
                company: '场站仓库',
                berthState: '充电桩公司',
                time: '刘谦',
                content: '	由于台风天气造成车站安全隐患',
            },
            {
                berthCode: '充电桩起火',
                bimCode: '充电桩消防应急预案',
                berthType: '高',
                floor: '二层',
                company: '停车位',
                berthState: '充电桩公司',
                time: '刘谦',
                content: '场站仓库起火',
            },
            {
                berthCode: '场内车辆碰撞',
                bimCode: '防台风安全应急预案',
                berthType: '重大',
                floor: '二层',
                company: '停车位',
                berthState: '充电桩公司',
                time: '王站',
                content: '公交车辆碰撞',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '风险源名称',
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => handlerClickName(row)}
                        >
                            {row.berthCode}
                        </span>
                    );
                },
            },
            {
                prop: 'bimCode',
                label: '风险源归属',
            },
            {
                prop: 'berthType',
                label: '风险等级',
            },
            {
                prop: 'floor',
                label: '所在楼层',
            },
            {
                prop: 'company',
                label: '风险源地点',
            },
            {
                prop: 'berthState',
                label: '责任单位',
            },
            {
                prop: 'time',
                label: '责任人',
            },
            {
                prop: 'content',
                label: '隐患内容',
                width: 200,
            },
        ],
        isSerialNumber: true,
        operatesBtnObj: {
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    alert('修改');
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
    totalCount: 100,
    pageSize: 10,
    pageNo: 1,
});
function handleCurrentChange(val) {
    console.log(`页码${val}`);
}
function handlerClickName(row) {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '风险源详情',
            isShow: true,
            width: 700,
            height: 420,
            path: '/parkingSafety/rightPageDiglog/securityRiskContent/detailsSecurityRisk',
            obj: {
                ...row,
            },
        },
    });
}
function handlerClickAdd() {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增安全风险',
            isShow: true,
            width: 750,
            height: 478,
            path: '/parkingSafety/rightPageDiglog/securityRiskContent/addSecurityRisk',
        },
    });
}
</script>

<template>
    <tableBox
        v-model:tableFromOption="tableFromOption"
        @handleCurrentChange="handleCurrentChange"
        @handlerClickAdd="handlerClickAdd"
    />
</template>

<style scoped lang="scss"></style>
