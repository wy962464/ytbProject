<!-- 应急事件详情 -->
<script setup>
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import { reactive } from 'vue';

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
let cardList = reactive([
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
    {
        name: '程序1',
        checked: false,
        content: `随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。随时检查场站去水道、沙井、雨水渠等，清除可能引致淤塞的
                                        垃圾、泥沙及杂物。`,
    },
]);
</script>

<template>
    <div class="detailsEmergencyEvents">
        <div class="left">
            <detailsInforStyle>
                <template #name>应急响应级别</template>
                <template #main>
                    <div class="emergencyList">
                        <el-scrollbar>
                            <div class="card" v-for="item in cardList" :key="item.name">
                                <div class="card_top">
                                    <div
                                        class="card_top_left"
                                        :style="{
                                            textDecoration: item.checked ? 'line-through' : 'none',
                                        }"
                                    >
                                        {{ item.name }}
                                    </div>
                                    <div class="card_top_right">
                                        <el-checkbox
                                            :disabled="item.checked"
                                            v-model="item.checked"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="card_bottom"
                                    :style="{
                                        textDecoration: item.checked ? 'line-through' : 'none',
                                    }"
                                >
                                    {{ item.content }}
                                </div>
                            </div>
                        </el-scrollbar>
                    </div>
                </template>
            </detailsInforStyle>
        </div>
        <div class="center">
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
        <div class="right">
            <detailsInforStyle>
                <template #name>视频区域</template>
                <template #main>654654654</template>
            </detailsInforStyle>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background-color: rgba(147, 147, 147, 1) !important;
    border-color: rgba(147, 147, 147, 1) !important;
}
:deep(.el-checkbox__inner) {
    background-color: rgba(2, 50, 64, 0.3) !important;
    border-color: rgba(15, 151, 103, 100) !important;
}
:deep(.el-checkbox) {
    --el-checkbox-disabled-checked-icon-color: rgba(255, 255, 255, 1);
}

.detailsEmergencyEvents {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
        width: 400px;
        height: 100%;
        .emergencyList {
            width: 100%;
            height: 100%;
            .card {
                width: 100%;
                min-height: 93px;
                background: rgba(2, 50, 64, 0.3);
                box-shadow: 0 0 30px 0 #041d2c inset;
                margin-bottom: 10px;
                padding: 15px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .card_top {
                    height: 16px;
                    margin-bottom: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 500;
                    font-size: 16px;
                    text-align: left;
                    color: #ffffff;
                }
                .card_bottom {
                    flex-grow: 1;
                    color: rgb(255, 255, 255);
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 21px;
                }
            }
        }
    }
    .center {
        width: 770px;
        height: 100%;
        margin-left: 10px;
        margin-right: 20px;
        box-shadow: 0 0 30px 0 #041d2c inset;
    }
    .right {
        flex-grow: 1;
        height: 100%;
    }
}
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
</style>
