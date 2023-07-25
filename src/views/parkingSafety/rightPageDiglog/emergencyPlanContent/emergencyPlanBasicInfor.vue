<!-- 应急预案基本信息 -->
<script setup>
import { isContent } from '@/utils/index';
import { DialogStore } from '@/store/modules/dialog.js';
import { reactive } from 'vue';

const dialogStore = DialogStore();
let orgDataList = reactive({
    id: 1,
    department: '指挥部',
    position: '总指挥',
    phone: '13667855917',
    children: [
        {
            id: 2,
            pid: 1,
            department: '现场指挥部',
            position: '总经理',
            phone: '13667855917',
            children: [
                {
                    id: 3,
                    pid: 2,
                    department: '警戒疏导组',
                    position: '运营管理高级经理',
                    phone: '13667855917',
                    children: [
                        {
                            id: 7,
                            pid: 3,
                            department: '主要成员',
                            position: '保安员、保洁员',
                            phone: '13667855917',
                        },
                    ],
                },
                {
                    id: 4,
                    pid: 2,
                    department: '现场抢险组',
                    position: '机电设施高级经理',
                    phone: '13667855917',
                    children: [
                        {
                            id: 7,
                            pid: 3,
                            department: '主要成员',
                            position: '机电工',
                            phone: '13667855917',
                        },
                    ],
                },
                {
                    id: 5,
                    pid: 2,
                    department: '医疗救护组',
                    position: '站务管理员负责人',
                    phone: '13667855917',
                    children: [
                        {
                            id: 8,
                            pid: 3,
                            department: '主要成员',
                            position: '站务管理员',
                            phone: '13667855917',
                        },
                    ],
                },
                {
                    id: 6,
                    pid: 2,
                    department: '通讯联络组',
                    position: '事务员',
                    phone: '13667855917',
                    children: [
                        {
                            id: 9,
                            pid: 3,
                            department: '主要成员',
                            position: '事务员',
                            phone: '13667855917',
                        },
                    ],
                },
            ],
        },
    ],
});
</script>

<template>
    <div class="emergencyPlanBasicInfor">
        <div class="left">
            <p>预案名称：{{ isContent(dialogStore.dialogInfor.obj.berthCode) }}</p>
            <p>预案类型：{{ isContent(dialogStore.dialogInfor.obj.berthCodess) }}</p>
            <p>适用事件：{{ isContent(dialogStore.dialogInfor.obj.berthType) }}</p>
            <div class="reason">
                <div class="lable">事件原因：</div>
                <el-scrollbar height="440px">
                    <div class="value">{{ isContent(dialogStore.dialogInfor.obj.reason) }}</div>
                </el-scrollbar>
            </div>
        </div>

        <div class="right">
            <vue3-tree-org :data="orgDataList" :tool-bar="false" :node-draggable="false" center>
                <template v-slot="{ node }">
                    <div class="orgDataListStyle">
                        <div class="department">{{ node.$$data.department }}</div>
                        <div class="position">职责：{{ node.$$data.position }}</div>
                        <div class="phone">应急电话：{{ node.$$data.phone }}</div>
                    </div>
                </template>
            </vue3-tree-org>
        </div>
    </div>
</template>

<style scoped lang="scss">
.emergencyPlanBasicInfor {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        box-sizing: border-box;
        height: 100%;
        width: 500px;
        margin-right: 10px;
        padding: 30px 20px 0 20px;
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
        box-shadow: 0 0 30px 0 #041d2c inset;
        .reason {
            display: flex;
            line-height: 18px;
            margin-top: 7px;
            .lable {
                white-space: nowrap;
            }
            .value {
                line-height: 20px;
            }
        }
    }
    .right {
        height: 100%;
        flex-grow: 1;
        box-shadow: 0 0 30px 0 #041d2c inset;
        .orgDataListStyle {
            text-align: left;
            width: 170px;
            height: 80px;
            padding-left: 14px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background-color: rgba(21, 63, 63, 100);
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            border: 1px solid rgba(51, 66, 73, 1);
            box-shadow: 0 0 10px 2px rgba(51, 66, 73, 0.7) inset;
            .department {
                font-weight: 700;
                font-size: 14px;
                color: #ffffff;
            }
        }
    }
}
</style>
