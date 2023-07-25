<!-- 应急事件 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import tableBox from '@/components/common/table.vue';

const router = useRouter();
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    modelFormValue: {},
    labelWidth: 0,
    fromItem: [
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: '预案名称',
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
                bimCode: '天气',
                berthType: '台风',
                floor: 'XXX',
                company: 'Ⅰ级',
                berthState: '处理中',
                time: '2022-12-14 09:37:29',
            },
            {
                berthCode: '安全（反恐）专项应急预案',
                bimCode: '反恐',
                berthType: '安全反恐',
                floor: 'XXX',
                company: 'Ⅰ级',
                berthState: '处理中',
                time: '2022-12-14 09:29:54',
            },
            {
                berthCode: '特种设备事故专项应急预案',
                bimCode: '设备',
                berthType: '特种设备事故',
                floor: 'XXX',
                company: 'Ⅰ级',
                berthState: '处理中',
                time: '2022-12-14 09:37:29',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '预案名称',
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
                label: '预案类型',
            },
            {
                prop: 'berthType',
                label: '适用事件',
            },
            {
                prop: 'floor',
                label: '风险源',
            },
            {
                prop: 'company',
                label: '响应级别',
            },
            {
                prop: 'berthState',
                label: '状态',
            },
            {
                prop: 'time',
                label: '启动时间',
            },
        ],
        serialNumber: true,
    },
    totalCount: 100,
    pageSize: 10,
    pageNo: 1,
});
function handleCurrentChange(val) {
    console.log(`页码${val}`);
}
function handlerClickName(obj) {
    console.log(obj);
    const { href } = router.resolve({ name: 'detailsEmergencyEvents' });
    window.open(href);
}
</script>

<template>
    <tableBox
        v-model:tableFromOption="tableFromOption"
        @handleCurrentChange="handleCurrentChange"
    />
</template>

<style scoped lang="scss"></style>
