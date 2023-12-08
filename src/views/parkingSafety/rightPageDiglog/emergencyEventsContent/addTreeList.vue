<!-- 新增节点 -->
<script setup>
import newlyAdded from '@/components/common/newlyAdded.vue';
import { reactive } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '名称：',
            labelWidth: 120,
            prop: 'department',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '职责：',
            labelWidth: 120,
            prop: 'position',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入职责',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'input',
            label: '应急电话：',
            labelWidth: 120,
            prop: 'phone',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入应急电话',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
    ],
});
const handlerSave = obj => {
    if (
        dialogStore.detailsDialogInfor.obj.node.children &&
        dialogStore.detailsDialogInfor.obj.node.children.length > 0
    ) {
        dialogStore.detailsDialogInfor.obj.node.children.push({
            id: 20,
            pid: dialogStore.detailsDialogInfor.obj.node.children[0].pid,
            department: obj.department,
            position: obj.position,
            phone: obj.phone,
        });
    } else {
        dialogStore.detailsDialogInfor.obj.node.children = [
            {
                id: 100,
                pid: 10,
                department: obj.department,
                position: obj.position,
                phone: obj.phone,
            },
        ];
    }
    dialogStore.$patch({
        detailsDialogInfor: {
            isShow: false,
        },
    });
};
</script>

<template>
    <div class="addTreeList">
        <newlyAdded v-model:tableFromOption="tableFromOption" @handlerSave="handlerSave" />
    </div>
</template>

<style scoped lang="scss">
.addTreeList {
    height: 100%;
    width: 100%;
}
</style>
