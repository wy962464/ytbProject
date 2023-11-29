<!-- 新增 -->
<script setup>
import { ref, onMounted } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';
import { deepClone } from '@/utils/index';

const tableFromRef = ref(null);
const dialogStore = DialogStore();
const props = defineProps({
    tableFromOption: {
        type: Object,
        default: () => {},
    },
});
const emit = defineEmits(['handlerSave']);
async function handlerSave() {
    if (!tableFromRef.value.fromRef) return;
    await tableFromRef.value.fromRef.validate((valid, fields) => {
        if (valid) {
            if (tableFromRef.value.uploadRef && tableFromRef.value.uploadRef.length > 0) {
                tableFromRef.value.uploadRef.map(item => {
                    item.handleFileSubmit();
                });
            }
            emit('handlerSave', props.tableFromOption.modelFormValue);
        } else {
            console.log('error submit!', fields);
        }
    });
}
onMounted(() => {
    if (dialogStore.detailsDialogInfor.isUpdate) {
        props.tableFromOption.modelFormValue = deepClone(dialogStore.detailsDialogInfor.obj);
    }
});
function handlerClose() {
    dialogStore.$patch({
        detailsDialogInfor: {
            isShow: false,
            isUpdate: false,
        },
    });
}
defineExpose({
    tableFromRef,
});
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
