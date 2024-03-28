<!-- 摄像头管理 -->
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
            name: '绑定',
            handlerClick: () => {
                alert('绑定');
            },
        },
        {
            name: '导入',
            handlerClick: () => {
                alert('导入');
            },
        },
    ],
    modelFormValue: {},
    fromItem: [
        {
            type: 'input',
            prop: 'topic',
            placeholder: '摄像机编码',
            style: {
                width: '124px',
            },
        },
        {
            type: 'input',
            prop: 'topic',
            placeholder: '摄像机IP',
            style: {
                width: '124px',
            },
        },
        {
            type: 'select',
            prop: 'direction',
            placeholder: '所属楼层',
            style: {
                width: '124px',
            },
            options: [
                {
                    label: '一楼',
                    value: '0',
                },
                {
                    label: '二楼',
                    value: '1',
                },
                {
                    label: '三楼',
                    value: '2',
                },
                {
                    label: '四楼',
                    value: '3',
                },
            ],
        },
    ],
    tableObj: {
        tableData: [
            {
                name: 'T008',
                sex: '备用出入口牌照-01',
                sss: '枪机',
                berthType: '牌照识别摄像机',
                comp: '一层',
                iphone: '192.168.2.96',
                beizhu: '标准RTSP/RTP协议',
                weizhi: '',
                status: '在线',
            },
            {
                name: 'T401',
                sex: '4L-牌照-01',
                sss: '枪机',
                berthType: '牌照识别摄像机',
                comp: '四层',
                iphone: '192.168.2.72',
                beizhu: '标准RTSP/RTP协议',
                weizhi: '',
                status: '在线',
            },
        ],
        tableHeader: [
            {
                prop: 'name',
                label: '摄像机编号',
            },
            {
                prop: 'sex',
                label: '摄像机名称',
            },
            {
                prop: 'sss',
                label: '摄像机类型',
            },
            {
                prop: 'berthType',
                label: '摄像机类别',
            },
            {
                prop: 'comp',
                label: '所属楼层',
            },
            {
                prop: 'iphone',
                label: 'IP地址',
            },
            {
                prop: 'beizhu',
                label: '链接协议',
            },
            {
                prop: 'weizhi',
                label: '位置描述',
            },
            {
                prop: 'status',
                label: '状态',
            },
        ],
        isSerialNumber: true,
        isMultiple: true,
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
                                            title: '修改摄像机',
                                            isShow: true,
                                            isUpdate: true,
                                            width: 700,
                                            height: 450,
                                            obj: row,
                                            path: '/setUp/record/cameraManage/addCameraManage',
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
        selectionChangeList: [],
    },
    totalCount: 23,
    pageSize: 10,
    pageNo: 1,
});
const handlerClickAdd = () => {
    dialogStore.$patch({
        detailsDialogInfor: {
            title: '新增摄像机',
            isShow: true,
            width: 700,
            height: 450,
            path: '/setUp/record/cameraManage/addCameraManage',
        },
    });
};
</script>

<template>
    <div class="cameraManage">
        <tableBox v-model:tableFromOption="tableFromOption" @handlerClickAdd="handlerClickAdd" />
    </div>
</template>

<style scoped lang="scss">
:deep(.el-table__header .el-checkbox) {
    display: none;
}
:deep(.el-table__header thead tr) {
    th:nth-child(2) .cell {
        &::after {
            content: '操作';
        }
    }
}
.cameraManage {
    width: 100%;
    height: 100%;
}
</style>
