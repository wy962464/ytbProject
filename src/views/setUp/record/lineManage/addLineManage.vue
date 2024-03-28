<!-- 新增线路 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import newlyAdded from '@/components/common/newlyAdded.vue';

let tableFromOption = reactive({
    isShowForm: true,
    modelFormValue: {
        domainList: [],
    },
    fromItem: [
        {
            type: 'treeSelect',
            label: '所属单位：',
            labelWidth: 100,
            prop: 'sex',
            placeholder: '请选择',
            rules: [
                {
                    required: true,
                    message: '请选择所属单位',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
            treeSelectList: [
                {
                    value: 1,
                    label: '深圳市交通公用设施建设中心',
                },
                {
                    value: 2,
                    label: '深圳市西部公共汽车有限公司',
                    children: [
                        {
                            value: 3,
                            label: '西部公汽第三分公司',
                        },
                        {
                            value: 4,
                            label: '西部公汽第一分公司',
                        },
                    ],
                },
            ],
        },
        {
            type: 'select',
            label: '所属车队：',
            labelWidth: 100,
            prop: 'berthType',
            rules: [
                {
                    required: true,
                    message: '请选择所属车队',
                    trigger: ['change', 'blur'],
                },
            ],
            placeholder: '请选择',
            style: {
                width: '200px',
            },
            options: [],
        },
        {
            type: 'input',
            label: '线路名称：',
            labelWidth: 100,
            prop: 'name',
            placeholder: '请输入',
            rules: [
                {
                    required: true,
                    message: '请输入线路名称',
                    trigger: ['change', 'blur'],
                },
            ],
            style: {
                width: '200px',
            },
        },
        {
            type: 'textarea',
            label: '备注：',
            labelWidth: 100,
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
                width: '200px',
            },
        },
        {
            type: 'vnodes',
            label: '',
            labelWidth: 0,
            style: {
                width: '630px',
            },
            render: () => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>
                            根据线路发车高低峰期,不同时间段内,设定时间窗口(每10分钟)最大可出车数量。
                        </span>
                        <div class={'programsBtn'} onClick={() => handlerAddDomain()}>
                            添加时间段
                        </div>
                    </div>
                );
            },
        },
        {
            type: 'domainsTwo',
            labelWidth: 0,
            style: {
                width: '100px',
            },
        },
    ],
});
const handlerAddDomain = () => {
    tableFromOption.modelFormValue.domainList.push({});
};
</script>

<template>
    <div class="addLineManage">
        <newlyAdded v-model:tableFromOption="tableFromOption" />
    </div>
</template>

<style scoped lang="scss">
.addLineManage {
    height: 100%;
    width: 100%;
}
</style>
