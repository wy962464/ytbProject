<!-- 新增应急响应程序 -->
<script setup lang="jsx">
import { reactive, ref, watch } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const tableFromRef = ref(null);
const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'treeSelect',
            label: '资产类别：',
            labelWidth: 120,
            prop: 'type',
            placeholder: '请输入',
            suffixIcon: 'Search',
            rules: [
                {
                    required: true,
                    message: '请输入资产类别',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '资产名称：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入资产名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '资产编码：',
            labelWidth: 120,
            prop: 'code',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入资产编码',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '型号：',
            labelWidth: 120,
            prop: 'typeNum',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入型号',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '品牌：',
            labelWidth: 120,
            prop: 'brand',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入品牌',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '责任人：',
            labelWidth: 120,
            prop: 'person',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入责任人',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '价格(元)：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入价格',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '楼层：',
            labelWidth: 120,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择楼层',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
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
            label: '房间区域：',
            labelWidth: 120,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择房间区域',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
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
            label: '保质期：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入保质期',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'vnodes',
            label: '关联模型：',
            labelWidth: 120,
            render: () => {
                return (
                    <div style={{ display: 'flex', color: '#ffffff' }}>
                        <span style={{ marginRight: '20px' }}>-模型</span>
                        <div class={'programsBtn'} onClick={() => handlerSelectModel()}>
                            选择模型
                        </div>
                    </div>
                );
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 120,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入备注',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
    ],
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
});
const handlerSelectModel = () => {
    alert('选择模型');
};
async function handlerSave() {
    if (!tableFromRef.value.fromRef) return;
    await tableFromRef.value.fromRef.validate((valid, fields) => {
        if (valid) {
            console.log('submit!');
        } else {
            console.log('error submit!', fields);
        }
    });
}
function handlerClose() {
    dialogStore.$patch({
        detailsDialogInfor: {
            isShow: false,
            obj: {
                ...tableFromOption.modelFormValue,
            },
        },
    });
}
</script>

<template>
    <div class="addEmergencyProcedures">
        <el-scrollbar>
            <div class="top">
                <tableBox ref="tableFromRef" v-model:tableFromOption="tableFromOption" />
            </div>
        </el-scrollbar>
        <div class="btnClick">
            <div class="programsBtn" @click="handlerSave">保存</div>
            <div class="programsBtn" @click="handlerClose">关闭</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';
:deep(.el-input__wrapper) {
    height: 28px;
}
.addEmergencyProcedures {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top {
        flex-grow: 1;
        width: 100%;
    }
}
</style>
