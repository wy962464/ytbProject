<!-- 新增应急响应程序 -->
<script setup lang="jsx">
import { reactive, ref } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const tableFromRef = ref(null);
const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {
        domainList: [
            {
                value: '',
            },
        ],
    },
    fromItem: [
        {
            type: 'textarea',
            label: '处置措施：',
            labelWidth: 100,
            prop: 'content',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入处置措施',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
        {
            type: 'textarea',
            label: '描述：',
            labelWidth: 100,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入描述',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '520px',
            },
        },
        {
            type: 'vnodes',
            label: '添加程序：',
            labelWidth: 100,
            render: () => {
                return (
                    <div class={'programsBtn'} onClick={() => handlerAddDomain()}>
                        添加
                    </div>
                );
            },
        },
        {
            type: 'domains',
            labelWidth: 100,
            style: {
                width: '520px',
            },
        },
    ],
});
const handlerAddDomain = () => {
    tableFromOption.modelFormValue.domainList.push({
        value: '',
    });
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
function handlerCose() {
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
            <div class="btn" @click="handlerSave">保存</div>
            <div class="btn" @click="handlerCose">关闭</div>
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
            border: 1px solid #275252;
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
    .top {
        flex-grow: 1;
        width: 100%;
    }
}
</style>
<style lang="scss">
.programsBtn {
    width: 70px;
    height: 30px;
    color: #ffffff;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    box-sizing: border-box;
    border: 1px solid #275252;
    &:hover {
        border: 1px solid #00ff84;
        color: #00ff84;
    }
}
</style>
