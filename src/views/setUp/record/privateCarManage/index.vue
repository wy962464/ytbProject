<!-- 私家车管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    otherBtnList: [
        {
            name: '导出',
            handlerClick: () => {
                alert('导出');
            },
        },
        {
            name: '导入',
            handlerClick: () => {
                alert('导入');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '车牌号',
            style: {
                width: '124px',
            },
        },
        {
            type: 'treeSelect',
            label: '',
            prop: 'type',
            placeholder: '所属单位',
            style: {
                width: '200px',
            },
            treeSelectList: [
                {
                    value: 1,
                    label: '配电系统',
                    children: [
                        {
                            value: 2,
                            label: '低压柜',
                        },
                        {
                            value: 3,
                            label: '变压器',
                        },
                        {
                            value: 4,
                            label: '高压柜',
                        },
                        {
                            value: 5,
                            label: '补偿柜',
                        },
                    ],
                },
                {
                    value: 6,
                    label: '二供水系统',
                    children: [
                        {
                            value: 7,
                            label: '给水泵',
                        },
                    ],
                },
                {
                    value: 8,
                    label: '供排水系统',
                    children: [
                        {
                            value: 9,
                            label: '潜水泵',
                        },
                    ],
                },
                {
                    value: 10,
                    label: '供排水系统',
                    children: [
                        {
                            value: 11,
                            label: '整体网络架构系统',
                        },
                        {
                            value: 12,
                            label: '管理服务器及主机',
                        },
                        {
                            value: 13,
                            label: '车辆识别监控',
                        },
                        {
                            value: 14,
                            label: '道闸系统',
                        },
                    ],
                },
            ],
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '车辆状态',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '离场',
                    value: '0',
                },
                {
                    label: '在场',
                    value: '1',
                },
                {
                    label: '维保中',
                    value: '2',
                },
                {
                    label: '清洁中',
                    value: '3',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                name: '渝A25QX3',
                sex: '深圳市交通场站建设发展有限公司',
                berthType: '',
                comp: '',
                iphone: '邹勇',
                beizhu: '',
                dianhua: '13480649545',
                leixing: '私家车',
            },
            {
                name: '粤B0U3V9',
                sex: '巴士集团第五分公司',
                berthType: '机关',
                comp: '',
                iphone: '朱卫东',
                beizhu: '',
                dianhua: '13686848301',
                leixing: '私家车',
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '车牌号',
            },
            {
                prop: 'sex',
                label: '所属单位',
            },
            {
                prop: 'berthType',
                label: '所属车队',
            },
            {
                prop: 'comp',
                label: '所属线路',
            },
            {
                prop: 'iphone',
                label: '姓名',
            },
            {
                prop: 'beizhu',
                label: '职位',
            },
            {
                prop: 'dianhua',
                label: '联系电话',
            },
            {
                prop: 'leixing',
                label: '车辆类型',
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
                                    dialogStore.$patch({
                                        detailsDialogInfor: {
                                            title: '修改车辆',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 700,
                                            height: 400,
                                            obj: row,
                                            path: '/setUp/record/busManage/addBusInfor',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
                },
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    ElMessageBox.confirm('确定删除该条数据？', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning',
                                    })
                                        .then(() => {})
                                        .catch(() => {});
                                }}
                            >
                                删除
                            </el-link>
                        );
                    },
                },
            ],
        },
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增车辆',
            isShow: true,
            width: 700,
            height: 400,
            path: '/setUp/record/busManage/addBusInfor',
        },
    });
};
</script>

<template>
    <div class="privateCar">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.privateCar {
    width: 100%;
    height: 100%;
}
</style>
