<!-- 设置 -->
<script setup>
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import systemMain from '@/components/common/systemMain.vue';
import { reactive } from 'vue';

const systemMainOption = reactive({
    path: [
        {
            name: '所有预约',
            component: '/setUp/conferenceRoom/allAppointments',
        },
        {
            name: '我的预约',
            component: '/setUp/conferenceRoom/myAppointment',
        },
        {
            name: '会议审批',
            component: '/setUp/conferenceRoom/meetingApproval',
        },
    ],
    tabSeletNum: 0,
});
</script>

<template>
    <div class="setUp">
        <div class="setUp_left">
            <detailsInforStyle :isShowTitle="false">
                <template #main></template>
            </detailsInforStyle>
        </div>
        <div class="setUp_right">
            <detailsInforStyle :isShowTitle="false">
                <template #main>
                    <component
                        :is="systemMain"
                        v-model:systemMainOption="systemMainOption"
                    ></component>
                </template>
            </detailsInforStyle>
        </div>
    </div>
</template>

<style scoped lang="scss">
.setUp {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .setUp_left {
        width: 260px;
        height: 100%;
    }
    .setUp_right {
        width: calc(100% - 280px);
        height: 100%;
    }
}
</style>
