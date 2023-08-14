<!-- 设置 -->
<script setup>
import detailsInforStyle from '@/components/common/detailsInforStyle.vue';
import calendar from '@/components/common/calendar.vue';
import { reactive } from 'vue';
const calendarOptions = reactive({
    dateTime: new Date('2023-09-12'),
    dataArr: [
        {
            date: '2023-08-14',
            starTime: '10:00',
            endTime: '10:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-20',
            starTime: '09:00',
            endTime: '12:00',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-18',
            starTime: '12:00',
            endTime: '12:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-08-18',
            starTime: '15:00',
            endTime: '16:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-06-18',
            starTime: '08:00',
            endTime: '12:30',
            name: '接待室',
            content: '张多多/项目会议',
        },
        {
            date: '2023-09-10',
            starTime: '15:00',
            endTime: '19:00',
            name: '接待室',
            content: '张多多/项目会议',
        },
    ],
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
                    <calendar v-model:calendarOptions="calendarOptions" />
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
    .setUp_left {
        width: 260px;
        height: 100%;
    }
    .setUp_right {
        flex-grow: 1;
        height: 100%;
        margin-left: 20px;
    }
}
</style>
