<!-- 新增消息信息 -->
<script setup>
import { nextTick, reactive, ref } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

const newly = ref(null);
let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            label: '消息标题：',
            labelWidth: 200,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入消息标题',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '消息简述：',
            labelWidth: 200,
            prop: 'event',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入消息简述',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '300px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 200,
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
                width: '300px',
            },
        },
        {
            type: 'tree',
            label: '阅读权限：',
            labelWidth: 200,
            prop: 'tree',
            rules: [
                {
                    required: true,
                    message: '请选择阅读权限',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
            data: [
                {
                    id: 1,
                    label: '阅读权限',
                    children: [
                        {
                            id: 2,
                            label: '驾驶员',
                        },
                        {
                            id: 3,
                            label: '巡查管理员',
                        },
                        {
                            id: 4,
                            label: '设施处',
                        },
                        {
                            id: 5,
                            label: '场站宝安',
                        },
                        {
                            id: 6,
                            label: '场站机电',
                        },
                        {
                            id: 7,
                            label: '运营组三级账号',
                        },
                        {
                            id: 8,
                            label: '场站综合',
                        },
                        {
                            id: 9,
                            label: '展示账号',
                        },
                        {
                            id: 10,
                            label: '调度人员',
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
            handleCheckChange: () => {
                nextTick(() => {
                    tableFromOption.modelFormValue.tree =
                        newly.value.tableFromRef.treeRef[0].getCheckedNodes();
                });
            },
        },
    ],
});
</script>

<template>
    <div class="addinFormationRelease">
        <newlyAdded ref="newly" v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addinFormationRelease {
    height: 100%;
    width: 100%;
}
</style>
