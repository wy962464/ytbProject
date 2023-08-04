<!-- 新增空间区域 -->
<script setup lang="jsx">
import { reactive, ref } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const tableFromRef = ref(null);
const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '房间名称：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入房间名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '房间编号：',
            labelWidth: 120,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入房间编号',
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
            type: 'input',
            label: '实际面积：',
            labelWidth: 120,
            prop: 'typeNum',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入实际面积',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '功能属性：',
            labelWidth: 120,
            prop: 'brand',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入功能属性',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '类型：',
            labelWidth: 120,
            prop: 'person',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入类型',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'treeSelect',
            label: '功能属性：',
            labelWidth: 120,
            prop: 'type',
            placeholder: '请选择',
            suffixIcon: 'Search',
            rules: [
                {
                    required: true,
                    message: '请选择功能属性',
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
                    <div style={{ display: 'flex', color: '#ffffff', width: '520px' }}>
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
            label: '深圳西部公共汽车有限公司',
            children: [
                {
                    value: 2,
                    label: '西部公汽第一分公司',
                },
                {
                    value: 3,
                    label: '西部公汽第三分公司',
                },
            ],
        },
        {
            value: 6,
            label: '深圳巴士集团股份有限公司',
            children: [
                {
                    value: 7,
                    label: '巴士集团第四分公司',
                },
                {
                    value: 10,
                    label: '巴士集团第五分公司',
                },
            ],
        },
        {
            value: 8,
            label: '深圳东部公共公交有限公司',
            children: [
                {
                    value: 9,
                    label: '东部公交第二分公司',
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
