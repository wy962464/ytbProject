<!-- 泊位列表 -->
<script lang="jsx" setup>
import tableBox from '@/components/common/table.vue';
import dayjs from 'dayjs';
import { reactive, ref, watch } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    modelFormValue: {},
    labelWidth: 0,
    fromItem: [
        {
            type: 'select',
            label: '',
            labelWidth: 0,
            prop: 'floor',
            rules: [],
            placeholder: '所在楼层',
            style: {
                width: '94px',
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
        {
            type: 'input',
            label: '',
            labelWidth: 0,
            prop: 'berthCode',
            rules: [],
            placeholder: '泊位编码',
            style: {
                width: '84px',
            },
        },
        {
            type: 'select',
            label: '',
            labelWidth: 0,
            prop: 'berthType',
            rules: [],
            placeholder: '泊位类型',
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
        {
            type: 'select',
            label: '',
            labelWidth: 0,
            prop: 'berthState',
            rules: [],
            placeholder: '泊位状态',
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
        {
            type: 'select',
            label: '',
            labelWidth: 0,
            prop: 'company',
            rules: [],
            placeholder: '所属公司',
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
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    otherBtnList: [],
    tableObj: {
        tableData: [
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
            {
                berthCode: '1-01',
                bimCode: 'a-01-10-03-03-01-0101',
                berthType: '公共汽车',
                floor: '一层',
                company: '西部公交',
                berthState: '占用',
            },
            {
                berthCode: '1-02',
                bimCode: 'a-01-10-03-03-01-0102',
                berthType: '公共汽车',
                floor: '一层',
                company: '巴士集团',
                berthState: '占用',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '泊位编码',
            },
            {
                prop: 'bimCode',
                label: 'BIM编码',
                width: '230',
            },
            {
                prop: 'berthType',
                label: '泊位类型',
            },
            {
                prop: 'floor',
                label: '所在楼层',
            },
            {
                prop: 'company',
                label: '所属公司',
            },
            {
                prop: 'berthState',
                label: '泊位状态',
            },
            {
                prop: 'carImg',
                label: '车牌图片',
                render: row => {
                    return (
                        <el-image
                            lazy
                            src="/src/assets/images/loginImages/carImg.jpg"
                            preview-teleported={true}
                            preview-src-list={['/src/assets/images/loginImages/carImg.jpg']}
                        />
                    );
                },
            },
        ],
        serialNumber: true,
        operatesBtnObj: {
            isOperatesBtn: true,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-text type="success" onClick={e => handlerClick(row)} size="small">
                                查看
                            </el-text>
                        );
                    },
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
function handlerClick(val) {
    alert(JSON.stringify(val));
}
</script>

<template>
    <tableBox
        v-model:tableFromOption="tableFromOption"
        @handleCurrentChange="handleCurrentChange"
    />
</template>

<style scoped lang="scss"></style>
