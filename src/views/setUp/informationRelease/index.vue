<!-- 信息发布 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';

let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '信息题目',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '消息内容',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '信息题目',
            },
            {
                prop: 'bimCode',
                label: '消息内容',
            },
            {
                prop: 'berthType',
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
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <div class="informationRelease">
        <tableBox v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.informationRelease {
    width: 100%;
    height: 100%;
}
</style>
