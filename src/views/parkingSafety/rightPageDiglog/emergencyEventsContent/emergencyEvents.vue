<!-- 应急事件 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import tableBox from '@/components/common/table.vue';
import Crypoto from '@/utils/crypto.js';

const router = useRouter();
const crypoto = new Crypoto();
let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
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
                list: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序2',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                ],
            },
            {
                berthCode: '安全（反恐）专项应急预案',
                bimCode: '反恐',
                berthType: '安全反恐',
                floor: 'XXX',
                company: 'Ⅰ级',
                berthState: '处理中',
                time: '2022-12-14 09:29:54',
                list: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                ],
            },
            {
                berthCode: '特种设备事故专项应急预案',
                bimCode: '设备',
                berthType: '特种设备事故',
                floor: 'XXX',
                company: 'Ⅰ级',
                berthState: '处理中',
                time: '2022-12-14 09:37:29',
                list: [
                    {
                        lable: '程序1',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序2',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序3',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序4',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序5',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序6',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                    {
                        lable: '程序7',
                        value: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞
                            的垃圾、泥沙及杂物。`,
                        checked: false,
                    },
                ],
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
        isSerialNumber: true,
    },
    totalCount: 100,
    pageSize: 10,
    pageNo: 1,
});
function handlerClickName(row) {
    let obj = crypoto.encrypt(JSON.stringify(row.list));
    const { href } = router.resolve({
        name: 'detailsEmergencyEvents',
        query: {
            list: obj,
        },
    });
    window.open(href, '_blank');
}
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
