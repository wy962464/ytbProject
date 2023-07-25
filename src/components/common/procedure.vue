<!-- 流程 -->
<script setup>
const props = defineProps({
    procedureOption: {
        type: Object,
        default: () => {},
    },
});
</script>

<template>
    <div class="procedure_mian">
        <el-scrollbar height="100%">
            <div
                class="procedure_model"
                v-for="(item, index) in props.procedureOption.procedureData"
                :key="index"
            >
                <div class="left">
                    <div class="img"></div>
                    <div class="line"></div>
                </div>
                <div class="main">
                    <ul class="mainList">
                        <li>
                            <span class="label">现警报等级：</span>
                            <span class="value">--</span>
                        </li>
                        <li>
                            <span class="label">处理人：</span>
                            <span class="value">苏大江</span>
                        </li>
                        <li>
                            <span class="label">处理时段：</span>
                            <span class="value">2023-06-23 16:59:29.034</span>
                        </li>
                        <li>
                            <span class="label">处理内容：</span>
                            <span class="value">维修人员完成维修</span>
                        </li>
                        <li>
                            <span class="label">处理内容：</span>
                            <span class="value">维修人员完成维修</span>
                        </li>
                    </ul>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<style scoped lang="scss">
.procedure_mian {
    height: 100%;
    .procedure_model {
        height: 115px;
        display: flex;
        .left {
            height: 100%;
            width: 22.97px;
            position: relative;
            display: flex;
            align-items: center;
            .img {
                position: absolute;
                left: 50%;
                top: calc(50% - 3px);
                transform: translate(-50%, -50%);
                height: 100%;
                z-index: 1;
                width: 22.97px;
                height: 22.97px;
                background: url('@/assets/images/homeImages/parkingSafety/procedure.png') no-repeat;
                background-size: 100% 100%;
            }
            .line {
                position: absolute;
                left: 50%;
                height: 100%;
                border-left: 1px solid #1f2833;
                z-index: -1;
            }
        }
        .main {
            box-sizing: border-box;
            height: 105px;
            width: 555.97px;
            background: url('@/assets/images/homeImages/parkingSafety/procedureBg.png') no-repeat;
            background-size: 100% 100%;
            margin-left: 5px;
            padding-left: 10px;
            display: flex;
            justify-content: space-around;
            font-weight: 400;
            font-size: 12px;
            color: #ffffff;
            .mainList {
                width: 100%;
                height: 105px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);

                li {
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    .label {
                        text-align: right;
                        min-width: 120px;
                    }
                    .value {
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>
