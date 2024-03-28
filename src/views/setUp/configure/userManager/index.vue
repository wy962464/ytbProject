<!-- 用户管理 -->
<script setup lang="jsx">
import { reactive } from 'vue';
import tableBox from '@/components/common/table.vue';
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
let tableFromOption = reactive({
    isShowForm: true,
    isShowQueryBtn: true,
    isShowTable: true,
    isShowOperateBtn: true,
    isBasicOperateBtn: true,
    otherBtnList: [
        {
            name: '导出Excel',
            handlerClick: () => {
                alert('导出Excel');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '姓名',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'content',
            placeholder: '单位',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'iphone',
            placeholder: '电话',
            style: {
                width: '124px',
            },
        },
    ],
    tableObj: {
        tableData: [
            {
                name: '许亮',
                sex: 'Xul',
                berthType: '男',
                comp: '13554986996',
                iphone: '205f2ds30@szpengtu.com',
                beizhu: '深圳市交通场站建设发展有限公司',
                number: ['1', '2', '0'],
            },
            {
                name: '王邦国',
                sex: 'Zouy',
                berthType: '男',
                comp: '13554986996',
                iphone: '205f2ds30@szpengtu.com',
                beizhu: '深圳市交通场站建设发展有限公司',
            },
            {
                name: '设施处网络安全',
                sex: 'Sscwl',
                berthType: '男',
                comp: '13554986996	',
                iphone: '205fds30@szpengtu.com',
                beizhu: '深圳市交通公用设施管理局',
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '姓名',
                render: row => {
                    return (
                        <span
                            style={{ color: '#00FF84', cursor: 'pointer' }}
                            onClick={() => {
                                dialogStore.$patch({
                                    detailsDialogInfor: {
                                        title: '用户详情',
                                        isShow: true,
                                        isDetails: true,
                                        obj: row,
                                        width: 600,
                                        height: 700,
                                        path: '/setUp/configure/userManager/addUserManager',
                                    },
                                });
                            }}
                        >
                            {row.name}
                        </span>
                    );
                },
            },
            {
                prop: 'sex',
                label: '登录名',
            },
            {
                prop: 'berthType',
                label: '性别',
            },
            {
                prop: 'comp',
                label: '电话',
            },
            {
                prop: 'iphone',
                label: '邮箱',
            },
            {
                prop: 'beizhu',
                label: '单位',
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
                                            title: '修改用户信息',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 600,
                                            height: 700,
                                            obj: row,
                                            path: '/setUp/configure/userManager/addUserManager',
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
            title: '新增用户信息',
            isShow: true,
            width: 600,
            height: 700,
            path: '/setUp/configure/userManager/addUserManager',
        },
    });
};
</script>

<template>
    <div class="userManager">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
.userManager {
    width: 100%;
    height: 100%;
}
</style>
