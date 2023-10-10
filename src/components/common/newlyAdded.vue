<!-- 新增 -->
<script setup>
import { ref } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const tableFromRef = ref(null);
const dialogStore = DialogStore();
const props = defineProps({
    tableFromOption: {
        type: Object,
        default: () => {},
    },
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
function handlerClose() {
    dialogStore.$patch({
        detailsDialogInfor: {
            isShow: false,
            obj: {
                ...props.tableFromOption.modelFormValue,
            },
        },
    });
}
</script>

<template>
    <div class="newlyAdded">
        <div class="top">
            <el-scrollbar>
                <tableBox ref="tableFromRef" v-model:tableFromOption="props.tableFromOption" />
            </el-scrollbar>
        </div>
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
.newlyAdded {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top {
        height: calc(100% - 52px);
        width: 100%;
        overflow: hidden;
    }
}
</style>
