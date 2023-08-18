<!-- 会议管理 -->
<script setup>
import systemMain from '@/components/common/systemMain.vue';
import { reactive } from 'vue';

let systemMainOption = reactive({
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
    <component :is="systemMain" v-model:systemMainOption="systemMainOption"></component>
</template>

<style scoped lang="scss"></style>
