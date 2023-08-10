<!-- 新增资产构件 -->
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
            label: '模型名称：',
            labelWidth: 190,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入模型名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'uploadFile',
            label: '关联BIM：',
            labelWidth: 190,
            prop: 'namess',
            rules: [
                {
                    required: true,
                    message: '请选择导入模型文件',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '300px',
            },
        },
        {
            type: 'uploadFile',
            label: '上传模型图片：',
            labelWidth: 190,
            prop: 'names',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请选择导入模型图片',
                    trigger: ['change', 'blur'],
                },
            ],
            limit: 1,
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 190,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入备注',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
    ],
});
async function handlerSave() {
    if (!tableFromRef.value.fromRef) return;
    await tableFromRef.value.fromRef.validate((valid, fields) => {
        if (valid) {
            console.log('submit!');
            console.log(tableFromRef.value);
            tableFromRef.value.uploadRef.map(item => {
                item.handleFileSubmit();
            });
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
    <div class="addMemberProperty">
        <el-scrollbar>
            <div class="top">
                <tableBox ref="tableFromRef" v-model:tableFromOption="tableFromOption" />
            </div>
        </el-scrollbar>
        <div class="btnClick">
            <div class="programsBtn" @click="handlerSave">保存</div>
            <div class="programsBtn" @click="handlerBack">返回</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';
:deep(.el-input__wrapper) {
    height: 28px;
}
.addMemberProperty {
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
