<!-- 信息发布 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '信息题目',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '消息内容',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
            {
                berthCode: '908会议室',
                bimCode: '908会议室',
                berthType: '九层',
            },
        ],
        tableHeader: [
            {
                prop: 'berthCode',
                label: '信息题目',
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => {
                                dialogStore.$patch({
                                    detailsDialogInfor: {
                                        title: '信息详情',
                                        isShow: true,
                                        isDetails: true,
                                        width: 750,
                                        height: 300,
                                        obj: row,
                                        path: '/setUp/management/informationRelease/addinFormationRelease',
                                    },
                                });
                            }}
                        >
                            {row.berthCode}
                        </span>
                    );
                },
            },
            {
                prop: 'bimCode',
                label: '消息内容',
            },
            {
                prop: 'berthType',
                label: '备注',
            },
        ],
        isSerialNumber: true,
        operatesBtnObj: {
            width: 100,
            operatesBtnList: [
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    dialogStore.$patch({
                                        detailsDialogInfor: {
                                            title: '修改信息',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 750,
                                            height: 350,
                                            obj: row,
                                            path: '/setUp/management/informationRelease/addinFormationRelease',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
                },
                {
                    render: row => {
                        return (
                            <el-link
                                underline={false}
                                type="success"
                                onClick={e => {
                                    ElMessageBox.confirm('确定删除该条数据？', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning',
                                    })
                                        .then(() => {})
                                        .catch(() => {});
                                }}
                            >
                                删除
                            </el-link>
                        );
                    },
                },
            ],
        },
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增消息信息',
            isShow: true,
            width: 700,
            height: 350,
            path: '/setUp/management/informationRelease/addinFormationRelease',
        },
    });
};
</script>

<template>
    <div class="informationRelease">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.informationRelease {
    width: 100%;
    height: 100%;
}
</style>
