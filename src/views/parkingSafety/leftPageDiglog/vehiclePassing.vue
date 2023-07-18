<!-- 过车管理 -->
<script setup lang="jsx">
import tableBox from '@/components/common/table.vue';
import { reactive } from 'vue';

let tableFromOption = reactive({
    isShowTable: true,
    isShowForm: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'datetimerange',
            prop: 'time',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            style: {
                width: '330px',
            },
        },
        {
            type: 'input',
            prop: 'license',
            placeholder: '请输入车牌号',
            style: {
                width: '140px',
            },
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '进场方向',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '入场',
                    value: '0',
                },
                {
                    label: '出场',
                    value: '1',
                },
            ],
        },
        {
            type: 'select',
            prop: 'Entrance',
            placeholder: '出入口',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '入口',
                    value: '0',
                },
                {
                    label: '出口',
                    value: '1',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
            {
                berthCode: '粤B37130D',
                berthType: '2023-06-23 08:00:00',
                carType: '公交车',
                park: '盐田北出入口',
                direction: '入场',
                Entrance: '入口',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '车牌',
            },
            {
                prop: 'bimCode',
                label: '车牌图片',
                render: row => {
                    return (
                        <el-image
                            lazy
                            src="/src/assets/images/loginImages/carImg.jpg"
                            preview-teleported={true}
                            preview-src-list={['/src/assets/images/loginImages/carImg.jpg']}
                        />
                    );
                },
            },
            {
                prop: 'berthType',
                label: '通过时间',
            },
            {
                prop: 'carType',
                label: '车辆类型',
            },
            {
                prop: 'park',
                label: '停车场',
            },
            {
                prop: 'direction',
                label: '方向',
            },
            {
                prop: 'Entrance',
                label: '出入口',
            },
            {
                prop: 'snapImg',
                label: '抓拍图片',
                render: row => {
                    return (
                        <el-image
                            lazy
                            src="/src/assets/images/loginImages/carImg.jpg"
                            preview-teleported={true}
                            preview-src-list={['/src/assets/images/loginImages/carImg.jpg']}
                        />
                    );
                },
            },
        ],
        serialNumber: true,
    },
    totalCount: 23,
    pageSize: 13,
    pageNo: 1,
});
</script>

<template>
    <tableBox v-model:tableFromOption="tableFromOption" />
</template>

<style scoped lang="scss"></style>
