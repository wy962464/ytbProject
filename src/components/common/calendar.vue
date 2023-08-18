<!-- 会议室预约 -->
<script setup lang="jsx">
import { ref, onMounted, nextTick } from 'vue';

const toWeek = ref(0);
const tableHeader = ref(null);
const tbodyRef = ref(null);
let weekYear = ref(null);
let calendarList = [];
// 当前周的信息
let toWeekArr = ref([]);
const timeArr = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
];
const props = defineProps({
    calendarOptions: {
        type: Object,
        default: () => {},
    },
});
//日期格式化 yyyy-mm-dd
const dateFormat = date => {
    return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getDate().toString().padStart(2, '0')
    );
};
//日期格式化 m/d
const dateFormatTwo = date => {
    return date.getMonth() + 1 + '/' + date.getDate();
};
//一天的毫秒数
const ondDayTime = 60 * 60 * 24 * 1000;
// 获取传入日期当前一周的时间
const currentWeek = (date = props.calendarOptions.dateTime) => {
    //-1是因为要把当天的毫秒数去掉
    let day = date.getDay() - 1;
    let firstDay = '';
    //如果<0，就是周末，所以取6
    day < 0 ? (day = 6) : '';
    //算出周一是哪一天
    firstDay = new Date(dateFormat(new Date(date.getTime() - day * ondDayTime)));
    const week = [];
    const chineseWeek = ['一', '二', '三', '四', '五', '六', '日'];
    for (let i = 0; i <= 6; i++) {
        week.push({
            //可换成星期
            chinese: '星期' + chineseWeek[i],
            day: i,
            date: dateFormat(new Date(firstDay.getTime() + i * ondDayTime)),
            dateTwo: dateFormatTwo(new Date(firstDay.getTime() + i * ondDayTime)),
        });
    }
    return week; //结果
};
toWeekArr.value = currentWeek();
//计算当前时间是当年的第几周
function getYearWeek(endDate = props.calendarOptions.dateTime) {
    //本年的第一天
    let dateFirst = new Date(endDate.getFullYear(), 0, 1).getTime();
    let dayTime = new Date(endDate).getTime();
    let dataNumber = (dayTime.valueOf() - dateFirst.valueOf()) / ondDayTime / 7;
    if (dataNumber > 52) {
        weekYear = 1;
    } else {
        weekYear = Math.ceil(dataNumber);
    }
}
getYearWeek();
// 上一周
const handlerCliclPrev = () => {
    toWeek.value--;
    // 上周一的日期
    let prevDate = new Date(
        new Date(currentWeek(props.calendarOptions.dateTime)[0].date).getTime() +
            toWeek.value * ondDayTime * 7
    );
    toWeekArr.value = currentWeek(new Date(prevDate));
    getYearWeek(new Date(prevDate));
    nextTick(() => {
        handlerRange();
    });
};
// 下一周
const handlerCliclNext = () => {
    toWeek.value++;
    // 下周一的日期
    let nextDate = new Date(
        new Date(currentWeek(props.calendarOptions.dateTime)[0].date).getTime() +
            toWeek.value * ondDayTime * 7
    );
    toWeekArr.value = currentWeek(new Date(nextDate));
    getYearWeek(new Date(nextDate));
    nextTick(() => {
        handlerRange();
    });
};
let starColor = ref(0);
let endColor = ref(0);
const starFindDate = date => {
    timeArr.map((item, index) => {
        if (date == item) {
            starColor = index;
        }
    });
};
const endFindDate = date => {
    timeArr.map((item, index) => {
        if (date == item) {
            endColor = index;
        }
    });
};
const handlerRange = () => {
    calendarList = [];
    props.calendarOptions.selectData = {};
    tableHeader.value.map(item => {
        let dataValue = item.attributes['data_value'].textContent;
        props.calendarOptions.dataArr.map(keys => {
            if (dataValue == keys.date) {
                starFindDate(keys.starTime);
                endFindDate(keys.endTime);
                let span = document.createElement('div');
                span.classList.add('calendarActive');
                span.style.cssText = `
                box-sizing: border-box;
                width:98%;
                height:${(tbodyRef.value.clientHeight / 24) * (endColor - starColor + 1)}px;
                background:#052623;
                position: absolute;
                top:${(tbodyRef.value.clientHeight / 24) * starColor + 50}px;
                left:-2px;
                border-left: 2px solid #0c6041;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                padding-left: 5px;
                cursor: pointer;`;
                item.appendChild(span);
                let contentName = document.createElement('p');
                let contentMain = document.createElement('p');
                contentName.innerHTML = keys.name;
                contentMain.innerHTML = keys.content;
                contentName.style.cssText = 'font-size: 16px; line-height: 20px;';
                contentMain.style.cssText = 'font-size: 12px; line-height: 20px;';
                span.appendChild(contentName);
                span.appendChild(contentMain);
                calendarList.push({ node: span, obj: keys });
            }
        });
    });
    calendarList.map((item, index) => {
        if (index == 0) {
            item.node.style.background = '#0c6041';
            props.calendarOptions.selectData = item.obj;
        }
        item.node.addEventListener('click', function () {
            calendarList.map((keys, num) => {
                if (index == num) {
                    keys.node.style.background = '#0c6041';
                    keys.node.style.zIndex = '1';
                    props.calendarOptions.selectData = keys.obj;
                } else {
                    keys.node.style.background = '#052623';
                    keys.node.style.zIndex = '0';
                }
            });
        });
    });
};
onMounted(() => {
    handlerRange();
});
</script>

<template>
    <div class="calendar" style="user-select: none">
        <div class="top">
            <div class="left" @click="handlerCliclPrev">
                <ArrowLeft style="width: 20px; height: 20px; color: #ffffff; margin-right: 8px" />
                <span>上一周</span>
            </div>
            <div class="center">
                {{ toWeekArr[0].date + '~' + toWeekArr[6].date }}
            </div>
            <div class="right" @click="handlerCliclNext">
                <span>下一周</span>
                <ArrowRight style="width: 20px; height: 20px; color: #ffffff; margin-left: 8px" />
            </div>
        </div>
        <div class="bottom">
            <table>
                <thead>
                    <tr>W{{ weekYear }}</tr>
                    <tr
                        v-for="item in toWeekArr"
                        :key="item.day"
                        ref="tableHeader"
                        :data_value="item.date"
                    >
                        {{ item.chinese }} {{ item.dateTwo }}
                    </tr>
                </thead>
                <tbody>
                    <table>
                        <tbody ref="tbodyRef">
                            <tr v-for="item in timeArr" :key="item">
                                <td>
                                    <span>{{ item }}</span>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
.calendar {
    width: 100%;
    height: 100%;
    .top {
        height: 40px;
        width: 100%;
        background: #02232f;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        .left,
        .right {
            min-width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            span {
                color: #ffffff;
                font-size: 18px;
            }
        }
        .center {
            color: #ffffff;
            font-size: 18px;
        }
    }
    .bottom {
        height: calc(100% - 40px);
        color: #ffffff;
        font-size: 16px;
        table {
            width: 100%;
            height: calc(100% - 50px);
            display: flex;
            flex-direction: column;
            border-spacing: 0;
            thead {
                display: flex;
                width: 100%;
                height: 50px;
                line-height: 50px;
                tr {
                    width: calc((100% - 80px) / 7);
                    text-align: center;
                    position: relative;
                    display: flex;
                    justify-content: center;
                }
                tr:first-child {
                    width: 80px;
                    text-align: center;
                }
            }
            tbody {
                width: 100%;
                height: 100%;
                table {
                    width: 100%;
                    height: 100%;
                    border-collapse: collapse;
                    border-spacing: 0;
                    tbody {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        tr {
                            width: 100%;
                            height: calc(100% / 24);
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            td {
                                width: calc((100% - 80px) / 7);
                                height: 100%;
                                border-right: 2px dashed #2e363e;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                box-sizing: border-box;
                            }
                            td:first-child {
                                width: 80px;
                                text-align: center;
                            }
                            td:last-child {
                                border-right: 2px dashed rgba(0, 0, 0, 0);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
