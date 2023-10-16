<!-- 单位管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';

let tableFromOption = reactive({
    isQueryBtn: true,
    isShowTable: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '房间编号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '房间名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'select',
            prop: 'way',
            placeholder: '所属楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一楼',
                    value: '1',
                },
                {
                    label: '二楼',
                    value: '2',
                },
                {
                    label: '三楼',
                    value: '3',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                id: '1',
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                children: [
                    {
                        id: '2',
                        taskList: '1#楼梯间',
                        sourceUnit: '',
                        person: '负一层',
                        opinion: '26.53',
                        date: '楼梯间',
                        state: '已处理',
                        starDate: '',
                    },
                    {
                        id: '3',
                        taskList: '1#楼梯间',
                        sourceUnit: '',
                        person: '负一层',
                        opinion: '26.53',
                        date: '楼梯间',
                        state: '已处理',
                        starDate: '',
                    },
                ],
            },
            {
                id: '4',
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                children: [
                    {
                        id: '5',
                        taskList: '1#楼梯间',
                        sourceUnit: '',
                        person: '负一层',
                        opinion: '26.53',
                        date: '楼梯间',
                        state: '已处理',
                        starDate: '',
                    },
                    {
                        id: '6',
                        taskList: '1#楼梯间',
                        sourceUnit: '',
                        person: '负一层',
                        opinion: '26.53',
                        date: '楼梯间',
                        state: '已处理',
                        starDate: '',
                    },
                ],
            },
            {
                id: '7',
                taskList: '1#楼梯间',
                sourceUnit: '',
                person: '负一层',
                opinion: '26.53',
                date: '楼梯间',
                state: '已处理',
                starDate: '',
                hasChildren: true,
            },
        ],
        tableHeader: [
            {
                prop: 'taskList',
                label: '单位全称',
            },
            {
                prop: 'sourceUnit',
                label: '单位简称',
            },
            {
                prop: 'person',
                label: '单位类型',
            },
            {
                prop: 'opinion',
                label: '单位地址',
            },
            {
                prop: 'date',
                label: '负责人',
            },
            {
                prop: 'state',
                label: '负责人电话',
            },
            {
                prop: 'starDate',
                label: '备注',
            },
        ],
        operatesBtnObj: {
            width: 190,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    alert('编辑');
                                }}
                            >
                                编辑
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
                                    alert('添加下级单位');
                                }}
                            >
                                添加下级单位
                            </el-link>
                        );
                    },
                    hasPermi: ['add'],
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
    <div class="unitsManager">
        <tableBox v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.unitsManager {
    width: 100%;
    height: 100%;
}
</style>
