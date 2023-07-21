<!-- 应急预案新增 -->
<script setup>
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
            label: '预案名称：',
            labelWidth: 128,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入预案名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '预案类型：',
            labelWidth: 128,
            prop: 'type',
            rules: [
                {
                    required: true,
                    message: '请输入预案类型',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请输入',
            style: {
                width: '200px',
            },
        },
        {
            type: 'select',
            label: '推送方式：',
            labelWidth: 128,
            prop: 'way',
            rules: [
                {
                    required: true,
                    message: '请选择推送方式',
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
            type: 'textarea',
            label: '推送内容：',
            labelWidth: 128,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入推送内容',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
        {
            type: 'textarea',
            label: '适用事件：',
            labelWidth: 128,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入适用事件',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
        {
            type: 'textarea',
            label: '危险因素分析：',
            labelWidth: 128,
            prop: 'analysis',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入危险因素分析',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '540px',
            },
        },
    ],
});
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
function handlerBack() {
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
    <div class="addEmergencyPlan">
        <el-scrollbar height="326px">
            <tableBox ref="tableFromRef" v-model:tableFromOption="tableFromOption" />
        </el-scrollbar>
        <div class="btnClick">
            <div class="btn" @click="handlerSave">保存</div>
            <div class="btn" @click="handlerBack">返回</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';
:deep(.el-input__wrapper) {
    height: 28px;
}
.addEmergencyPlan {
    display: flex;
    flex-direction: column;
    .btnClick {
        margin-top: 22px;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn {
            width: 70px;
            height: 30px;
            color: #ffffff;
            line-height: 28px;
            text-align: center;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            box-sizing: border-box;
            border: 1px solid #334249;
            &:hover {
                border: 1px solid #00ff84;
                color: #00ff84;
            }
        }
        .btn:nth-child(1) {
            margin-right: 5px;
        }
        .btn:nth-child(2) {
            margin-left: 5px;
        }
    }
}
</style>
