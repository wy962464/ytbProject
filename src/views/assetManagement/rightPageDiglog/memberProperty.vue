<!-- 资产构件库 -->
<script setup>
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
    isLibrary: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'name',
            placeholder: '请输入模型名称',
            style: {
                width: '124px',
            },
        },
    ],
    libraryObj: {
        memberPropertyList: [
            {
                name: '鹿',
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            },
            {
                name: '鹿',
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            },
            {
                name: '鹿',
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            },
            {
                name: '鹿',
                url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            },
        ],
        isMemberClick: true,
    },
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickMember = item => {
    alert(JSON.stringify(item));
};
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增资产构件',
            isShow: true,
            width: 700,
            height: 466,
            path: '/assetManagement/rightPageDiglog/addMemberProperty',
        },
    });
};
</script>

<template>
    <div class="memberProperty">
        <tableBox
            ref="tableFromRef"
            v-model:tableFromOption="tableFromOption"
            @handlerClickAdd="handlerClickAdd"
            @handlerClickMember="handlerClickMember"
        />
    </div>
</template>

<style scoped lang="scss">
.memberProperty {
    width: 100%;
    height: 100%;
}
</style>
