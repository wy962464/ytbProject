<!-- 角色管理 -->
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
            placeholder: '中文名称',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '英文名称',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                name: 'wxAdmin',
                sex: '巡查管理员',
                berthType: '是',
                comp: '',
            },
            {
                name: 'ddry',
                sex: '调度人员',
                berthType: '是',
                comp: '',
            },
            {
                name: 'driver2',
                sex: '驾驶员',
                berthType: '是',
                comp: '',
            },
            {
                name: 'drivers',
                sex: '驾驶员',
                berthType: '是',
                comp: '',
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '英文名称',
            },
            {
                prop: 'sex',
                label: '中文名称',
            },
            {
                prop: 'berthType',
                label: '是否启用',
            },
            {
                prop: 'comp',
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
                                            title: '修改角色信息',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 700,
                                            height: 700,
                                            obj: { ...row },
                                            path: '/setUp/rolesManager/addRolesManager',
                                        },
                                    });
                                }}
                            >
                                修改
                            </el-link>
                        );
                    },
                    hasPermi: ['update'],
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
                    hasPermi: ['del'],
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
            title: '新增角色信息',
            isShow: true,
            width: 700,
            height: 700,
            path: '/setUp/rolesManager/addRolesManager',
        },
    });
};
</script>

<template>
    <div class="rolesManager">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.rolesManager {
    width: 100%;
    height: 100%;
}
</style>
