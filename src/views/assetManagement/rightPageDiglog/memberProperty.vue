<!-- 资产构件库 -->
<script setup>
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';

let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isLibrary: true,
    isShowOperateBtn: true,
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
    memberPropertyList: [
        {
            name: '鹿',
            url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        },
    ],
    otherBtnList: [
        {
            name: '新增',
            handlerClick: () => {
                alert('新增');
            },
        },
    ],
    totalCount: 5,
    pageSize: 10,
    pageNo: 1,
});
</script>

<template>
    <div class="memberProperty">
        <tableBox ref="tableFromRef" v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.memberProperty {
    width: 100%;
    height: 100%;
}
</style>
