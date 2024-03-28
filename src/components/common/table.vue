<script setup>
import { ref, nextTick, watchEffect, onMounted } from 'vue';
import { checkedType } from '@/utils/index';
import { useTableFrom } from '@/utils/tableFromHandler';
import uploadFile from '@/components/common/uploadFile.vue';
import { DialogStore } from '@/store/modules/dialog.js';
import { AuthStore } from '@/store/modules/auth.js';

const dialogStore = DialogStore();
const authStore = AuthStore();
const fromRef = ref(null);
const uploadRef = ref(null);
const elTables = ref(null);
const treeRef = ref(null);
let filterHasPermiStatus = [];

const {
    dataListObj,
    getDataList,
    pagination,
    handlerQueryList,
    handleCurrentChange,
    handleResetForm,
} = useTableFrom(props.tableFromOption.requestFun, props.tableFromOption.modelFormValue);
watchEffect(() => {
    if (props.tableFromOption.requestFun) {
        if (props.tableFromOption.isShowTable) {
            props.tableFromOption.tableObj.tableData = dataListObj.dataList;
        } else if (props.tableFromOption.isLibrary) {
            props.tableFromOption.libraryObj.memberPropertyList = dataListObj.dataList;
        }
        props.tableFromOption.totalCount = dataListObj.totalCount;
        props.tableFromOption.pageSize = pagination.pageSize;
        props.tableFromOption.pageNo = pagination.pageNo;
    }
});
const renderDom = {
    props: ['row', 'column', 'render'],
    render: data => {
        return data.render(data.row, data.column);
    },
};
onMounted(() => {
    if (
        props.tableFromOption.requestFun &&
        (props.tableFromOption.isShowTable || props.tableFromOption.isLibrary)
    ) {
        getDataList();
    }
    if (
        props.tableFromOption.isShowTable &&
        props.tableFromOption.tableObj.operatesBtnObj &&
        props.tableFromOption.tableObj.operatesBtnObj.operatesBtnList &&
        props.tableFromOption.tableObj.operatesBtnObj.operatesBtnList.length > 0
    ) {
        let filterHasPermi = [];
        props.tableFromOption.tableObj.operatesBtnObj.operatesBtnList.map(item => {
            filterHasPermi.push(item.hasPermi?.join() ?? ['*:*:*'].join());
        });
        filterHasPermiStatus = filterHasPermi.map(item => {
            if (
                authStore.getPermissions.includes(item) ||
                authStore.getPermissions.includes('*:*:*')
            ) {
                return true;
            } else {
                return false;
            }
        });
    }
});
/**
 * @description props详情
 * @param tableFromOption.isShowForm 是否显示表单
 * @param tableFromOption.modelFormValue 表单v-model字段
 * @param tableFromOption.labelWidth 表单标签的长度
 * @param tableFromOption.fromItem 表单控件列表
 * @param tableFromOption.fromItem.type 表单控件类型
 * @param tableFromOption.fromItem.label 表单控件标签
 * @param tableFromOption.fromItem.labelWidth 控件标签的长度
 * @param tableFromOption.fromItem.prop 表单控件prop
 * @param tableFromOption.fromItem.rules 表单控件验证规则列表
 * @param tableFromOption.fromItem.placeholder 表单控件placeholder
 * @param tableFromOption.fromItem.style 表单控件样式
 * @param tableFromOption.isShowSwitchBtn 是否显示表单前切换按钮
 * @param tableFromOption.isShowQueryBtn 是否显示查询重置按钮
 * @param tableFromOption.isShowOperateBtn 是否显示操作按钮
 * @param tableFromOption.isBasicOperateBtn 是否显示基本操作按钮
 * @param tableFromOption.otherBtnList 其他按钮列表
 * @param tableFromOption.moreActionsList 更多操作下拉按钮
 * @param tableFromOption.isShowTable 是否显示表格
 * @param tableFromOption.requestFun 请求地址
 * @param tableFromOption.tableObj 表格数据详情
 * @param tableFromOption.tableObj.headerRowStyle 表格头部行的样式
 * @param tableFromOption.tableObj.headerCellStyle 表格头部单元格的样式
 * @param tableFromOption.tableObj.isRowClick 表格行是否可以点击
 * @param tableFromOption.tableObj.cellStyle 表格内单元格的样式
 * @param tableFromOption.tableObj.tableData 表格数据
 * @param tableFromOption.tableObj.tableHeader 表格头部数据
 * @param tableFromOption.tableObj.isMultiple 是否多选
 * @param tableFromOption.tableObj.selectionChangeList 多选列表
 * @param tableFromOption.tableObj.isSerialNumber 是否显示序号
 * @param tableFromOption.tableObj.operatesBtnObj 表格操作按钮详情
 * @param tableFromOption.tableObj.operatesBtnObj.operatesBtnList 表格操作按钮列表
 * @param tableFromOption.tableObj.isLibrary  是否显示资产构建库
 * @param tableFromOption.libraryObj.memberPropertyList  资产构建库列表
 * @param tableFromOption.libraryObj.isMemberClick 是否需要点击事件
 * @param tableFromOption.totalCount 总数
 * @param tableFromOption.pageSize 每页条数
 * @param tableFromOption.pageNo 页码
 */
const props = defineProps({
    tableFromOption: {
        type: Object,
        default: () => {},
    },
});
const emit = defineEmits([
    'handleCellClick',
    'rowClick',
    'handleSizeChange',
    'handlerClickAdd',
    'handleCurrentSelect',
    'handlerClickMember',
]);
const resetForm = () => {
    fromRef.value?.resetFields();
    for (let key in props.tableFromOption.modelFormValue) {
        if (checkedType(props.tableFromOption.modelFormValue[key]) === 'Undefined') {
            props.tableFromOption.modelFormValue[key] = '';
        }
    }
    handleResetForm();
};
// 转换el-date-picker type="month" 时 月份不为数字
const monthObj = {
    一月: '01月',
    二月: '02月',
    三月: '03月',
    四月: '04月',
    五月: '05月',
    六月: '06月',
    七月: '07月',
    八月: '08月',
    九月: '09月',
    十月: '10月',
    十一月: '11月',
    十二月: '12月',
};
// 滑块时间设置
const sliderMarks = {
    0: {
        style: {
            color: '#FFFFFF',
        },
        label: '08:00',
    },
    6: {
        style: {
            color: '#FFFFFF',
        },
        label: '09:00',
    },
    12: {
        style: {
            color: '#FFFFFF',
        },
        label: '10:00',
    },
    18: {
        style: {
            color: '#FFFFFF',
        },
        label: '11:00',
    },
    24: {
        style: {
            color: '#FFFFFF',
        },
        label: '12:00',
    },
    30: {
        style: {
            color: '#FFFFFF',
        },
        label: '13:00',
    },
    36: {
        style: {
            color: '#FFFFFF',
        },
        label: '14:00',
    },
    42: {
        style: {
            color: '#FFFFFF',
        },
        label: '15:00',
    },
    48: {
        style: {
            color: '#FFFFFF',
        },
        label: '16:00',
    },
    54: {
        style: {
            color: '#FFFFFF',
        },
        label: '17:00',
    },
    60: {
        style: {
            color: '#FFFFFF',
        },
        label: '18:00',
    },
    66: {
        style: {
            color: '#FFFFFF',
        },
        label: '19:00',
    },
};
let numMonthArr = [
    '01月',
    '02月',
    '03月',
    '04月',
    '05月',
    '06月',
    '07月',
    '08月',
    '09月',
    '10月',
    '11月',
    '12月',
];
function monthDictionary(month) {
    return monthObj[month];
}
function focusFn() {
    nextTick(() => {
        let monthArr = document.querySelectorAll('div>.cell');
        if (monthArr && monthArr.length && numMonthArr.includes(monthArr[0].innerHTML)) {
            return;
        }
        for (let i = 0; i < monthArr.length; i++) {
            let aDom = monthArr[i];
            aDom.innerHTML = monthDictionary(aDom.innerHTML);
        }
    });
}
// 多行选中
function handleSelectionChange(val) {
    props.tableFromOption.tableObj.selectionChangeList = val;
}
// 点击选择某个单元格
function handleCellClick(row, column, cell, event) {
    emit('handleCellClick', row, column, cell, event);
}
// 某一行被点击
function rowClick(row, column, event) {
    if (props.tableFromOption.tableObj.isRowClick) {
        elTables.value?.toggleRowSelection(row);
        emit('rowClick', row, column, event);
    }
}
// 切换条数
function handleSizeChange(val) {
    emit('handleSizeChange', val);
}
// 新增
function handlerClickAdd() {
    emit('handlerClickAdd');
}
// 资产构件库点击事件
const handlerClickMember = item => {
    if (props.tableFromOption.libraryObj.isMemberClick) {
        emit('handlerClickMember', item);
    }
};
const filterNodeMethod = (value, data, node) => {
    if (!value) return true;
    return data.label.includes(value);
};
const handleCurrentSelect = (data, node) => {
    if (!data.children) {
        emit('handleCurrentSelect', data);
    }
};
function formatterCellval(row, column, cellValue) {
    if (checkedType(cellValue) === 'Undefined' || !Boolean(String(cellValue))) {
        return '--';
    } else {
        return cellValue;
    }
}
function removeDomain(index) {
    if (props.tableFromOption.modelFormValue.domainList.length > 1) {
        props.tableFromOption.modelFormValue.domainList.splice(index, 1);
    } else {
        ElMessage.warning('已经是最后一个了');
    }
}
const handlerLeftSwitchBtn = () => {
    props.tableFromOption.isShowTable = false;
};
const handlerRightSwitchBtn = () => {
    props.tableFromOption.isShowTable = true;
    if (
        props.tableFromOption.requestFun &&
        (props.tableFromOption.isShowTable || props.tableFromOption.isLibrary)
    ) {
        getDataList();
    }
};
defineExpose({
    resetForm,
    fromRef,
    uploadRef,
    treeRef,
});
</script>

<template>
    <div class="table_module">
        <!-- form 表单-->
        <div
            class="query_form"
            :style="{
                justifyContent: props.tableFromOption.isShowForm ? 'space-between' : 'flex-end',
            }"
        >
            <template v-if="props.tableFromOption.isShowForm">
                <div class="formContent">
                    <div class="switchBtn" v-if="props.tableFromOption.isShowSwitchBtn">
                        <div
                            class="leftSwitchBtn"
                            :class="{ active: !props.tableFromOption.isShowTable }"
                            @click="handlerLeftSwitchBtn"
                        ></div>
                        <div
                            class="rightSwitchBtn"
                            :class="{ active: props.tableFromOption.isShowTable }"
                            @click="handlerRightSwitchBtn"
                        ></div>
                    </div>
                    <el-form
                        ref="fromRef"
                        :model="props.tableFromOption.modelFormValue"
                        :label-width="props.tableFromOption.labelWidth"
                        :inline="props.tableFromOption.inline || true"
                        hide-required-asterisk
                        :style="props.tableFromOption.style"
                    >
                        <template v-for="item in props.tableFromOption.fromItem">
                            <!-- 动态表单 -->
                            <template v-if="item.type === 'domainsOne'">
                                <template
                                    v-for="(domain, index) in props.tableFromOption.modelFormValue
                                        .domainList"
                                >
                                    <el-form-item
                                        label="程序名称："
                                        :prop="'domainList.' + index + '.value'"
                                        :label-width="item.labelWidth"
                                    >
                                        <div :style="item.style" class="domainStyle">
                                            {{ `程序${index + 1}` }}
                                        </div>
                                    </el-form-item>
                                    <el-form-item
                                        label="程序描述："
                                        :prop="'domainList.' + index + '.value'"
                                        :rules="[
                                            {
                                                required: true,
                                                message: `请输入程序${index + 1}的描述`,
                                                trigger: ['change', 'blur'],
                                            },
                                        ]"
                                        :label-width="item.labelWidth"
                                    >
                                        <el-input
                                            autosize
                                            v-model="domain.value"
                                            style="width: 430px; margin-right: 20px"
                                            placeholder="请输入"
                                            type="textarea"
                                            resize="none"
                                        />
                                        <div class="programsBtn" @click="removeDomain(index)">
                                            删除
                                        </div>
                                    </el-form-item>
                                </template>
                            </template>
                            <template v-if="item.type === 'domainsTwo'">
                                <template
                                    v-for="(domain, index) in props.tableFromOption.modelFormValue
                                        .domainList"
                                >
                                    <el-form-item
                                        label="时间段："
                                        :prop="'domainList.' + index + '.time1'"
                                        :rules="[
                                            {
                                                required: true,
                                                message: `请选择时间`,
                                                trigger: ['change', 'blur'],
                                            },
                                        ]"
                                        :label-width="item.labelWidth"
                                    >
                                        <el-time-select
                                            v-model="domain.time1"
                                            style="width: 120px"
                                            start="00:00"
                                            step="00:05"
                                            end="23:55"
                                            placeholder=""
                                            popper-class="timeSelectPopperClass"
                                        />
                                    </el-form-item>
                                    <div
                                        style="
                                            display: inline-block;
                                            position: relative;
                                            width: 30px;
                                        "
                                    >
                                        <span style="position: absolute; top: -20px; left: 0">
                                            —
                                        </span>
                                    </div>
                                    <el-form-item
                                        label=""
                                        :prop="'domainList.' + index + '.time2'"
                                        :label-width="item.labelWidth"
                                        :rules="[
                                            {
                                                required: true,
                                                message: `请选择时间`,
                                                trigger: ['change', 'blur'],
                                            },
                                        ]"
                                    >
                                        <el-time-select
                                            v-model="domain.time2"
                                            style="width: 120px"
                                            start="00:00"
                                            step="00:05"
                                            end="23:55"
                                            placeholder=""
                                            popper-class="timeSelectPopperClass"
                                        />
                                    </el-form-item>
                                    <el-form-item
                                        label="每十分钟计划出车量："
                                        :prop="'domainList.' + index + '.number'"
                                        :label-width="item.labelWidth"
                                        :rules="[
                                            {
                                                required: true,
                                                message: `请输入计划出车量`,
                                                trigger: ['change', 'blur'],
                                            },
                                        ]"
                                    >
                                        <el-input-number
                                            v-model="domain.number"
                                            :min="1"
                                            :max="10"
                                            controls-position="right"
                                            placeholder="计划出车量"
                                            style="width: 120px; margin-right: 20px"
                                        />
                                        <div class="programsBtn" @click="removeDomain(index)">
                                            删除
                                        </div>
                                    </el-form-item>
                                </template>
                            </template>
                            <template v-else>
                                <el-form-item
                                    :label="item.label"
                                    :prop="item.prop"
                                    :rules="item.rules"
                                    :label-width="item.labelWidth"
                                    :style="{
                                        alignItems:
                                            item.type == 'uploadFile' ||
                                            item.type == 'tree' ||
                                            item.type == 'checkbox'
                                                ? 'flex-start'
                                                : 'center',
                                    }"
                                >
                                    <!-- 输入框 -->
                                    <template v-if="item.type === 'input'">
                                        <el-input
                                            :placeholder="item.placeholder"
                                            :style="item.style"
                                            :suffix-icon="item.suffixIcon"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                        />
                                    </template>
                                    <!-- 文本域 -->
                                    <template v-if="item.type === 'textarea'">
                                        <el-input
                                            autosize
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                            :placeholder="item.placeholder"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            resize="none"
                                            type="textarea"
                                        />
                                    </template>
                                    <!-- 下拉框 -->
                                    <template v-if="item.type === 'select'">
                                        <el-select
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :placeholder="item.placeholder"
                                            :style="item.style"
                                            popper-class="selectPopperClass"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                        >
                                            <el-option
                                                v-for="option in item.options"
                                                :key="option.label"
                                                :label="option.label"
                                                :value="option.value"
                                            />
                                        </el-select>
                                    </template>
                                    <!-- 树形下拉框选择 -->
                                    <template v-if="item.type === 'treeSelect'">
                                        <el-tree-select
                                            popper-class="treeSelectPopperClass"
                                            default-expand-all
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :placeholder="item.placeholder"
                                            :style="item.style"
                                            :data="item.treeSelectList"
                                            icon="ArrowRightBold"
                                            filterable
                                            :filter-node-method="filterNodeMethod"
                                            @current-change="handleCurrentSelect"
                                        >
                                            <template v-slot="{ node, data }">
                                                <span
                                                    class="ellipsis"
                                                    v-text="node.label"
                                                    :title="node.label"
                                                ></span>
                                            </template>
                                        </el-tree-select>
                                    </template>
                                    <!-- 月 -->
                                    <template v-if="item.type === 'monthPicker'">
                                        <el-date-picker
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                            type="month"
                                            :editable="false"
                                            :placeholder="item.placeholder"
                                            popper-class="nonScopePickerClass"
                                            @focus="focusFn"
                                            @panel-change="focusFn"
                                            format="YYYY-MM"
                                            value-format="YYYY-MM"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            :shortcuts="[
                                                {
                                                    text: '今天',
                                                    value: new Date(),
                                                },
                                            ]"
                                        />
                                    </template>
                                    <!-- 年 -->
                                    <template v-if="item.type === 'yaerPicker'">
                                        <el-date-picker
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                            type="year"
                                            :editable="false"
                                            :placeholder="item.placeholder"
                                            popper-class="nonScopePickerClass"
                                            format="YYYY"
                                            value-format="YYYY"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            :shortcuts="[
                                                {
                                                    text: '今天',
                                                    value: new Date(),
                                                },
                                            ]"
                                        />
                                    </template>
                                    <!-- 日 -->
                                    <template v-if="item.type === 'datePicker'">
                                        <el-date-picker
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                            type="date"
                                            :editable="false"
                                            :placeholder="item.placeholder"
                                            popper-class="nonScopePickerClass"
                                            format="YYYY-MM-DD"
                                            value-format="YYYY-MM-DD"
                                            @panel-change="focusFn"
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                            :shortcuts="[
                                                {
                                                    text: '今天',
                                                    value: new Date(),
                                                },
                                            ]"
                                        />
                                    </template>
                                    <!-- 日期范围 -->
                                    <template v-if="item.type === 'daterange'">
                                        <el-date-picker
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            type="daterange"
                                            popper-class="scopePickerClass"
                                            range-separator="~"
                                            :editable="false"
                                            :style="item.style"
                                            :start-placeholder="item.startPlaceholder"
                                            :end-placeholder="item.endPlaceholder"
                                            format="YYYY-MM-DD"
                                            value-format="YYYY-MM-DD"
                                            prefix-icon=""
                                            :disabled="
                                                dialogStore.detailsDialogInfor.isDetails ||
                                                item.disabled
                                            "
                                        />
                                    </template>
                                    <!-- 日期时间范围 -->
                                    <template v-if="item.type === 'datetimerange'">
                                        <el-date-picker
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            type="datetimerange"
                                            popper-class="scopePickerClass"
                                            range-separator="~"
                                            :editable="false"
                                            :style="item.style"
                                            :start-placeholder="item.startPlaceholder"
                                            :end-placeholder="item.endPlaceholder"
                                            format="YYYY-MM-DD HH:mm:ss"
                                            value-format="YYYY-MM-DD HH:mm:ss"
                                            prefix-icon=""
                                        />
                                    </template>
                                    <!-- 文件上传 -->
                                    <template v-if="item.type === 'uploadFile'">
                                        <uploadFile
                                            ref="uploadRef"
                                            v-model:file-list="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                            :drag="item.drag"
                                            :accept="item.accept"
                                            :limit="item.limit"
                                        >
                                            <template #tip>
                                                <div class="upload_rule">
                                                    <span v-if="item?.accept?.length > 0">
                                                        {{ item?.accept?.join(',') }}
                                                    </span>
                                                    <div
                                                        class="uploadTip"
                                                        v-if="
                                                            !props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ] ||
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ].length < 1
                                                        "
                                                    >
                                                        <div class="icon"></div>
                                                        <div class="text">
                                                            {{
                                                                item.rules && item.rules.length > 0
                                                                    ? item.rules[0].message
                                                                    : '请选择文件'
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </uploadFile>
                                    </template>
                                    <!-- slider 时间选择 -->
                                    <template v-if="item.type === 'slider'">
                                        <el-slider
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            range
                                            :marks="sliderMarks"
                                            :style="item.style"
                                            :max="66"
                                            :show-stops="true"
                                            @input="item.input"
                                            :format-tooltip="
                                                val => {
                                                    let remainder = val % 6;
                                                    let time = parseInt(val / 6) + 8;
                                                    return `${
                                                        time >= 10 ? time : `0${time}`
                                                    }:${remainder}0`;
                                                }
                                            "
                                        />
                                    </template>
                                    <!-- 多选框控件 -->
                                    <template v-if="item.type === 'checkbox'">
                                        <el-checkbox-group
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :style="item.style"
                                        >
                                            <el-checkbox
                                                v-for="keys in item.checkboxList"
                                                :key="keys.value"
                                                :label="keys.value"
                                                :disabled="
                                                    dialogStore.detailsDialogInfor.isDetails ||
                                                    keys.disabled
                                                "
                                            >
                                                {{ keys.name }}
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </template>
                                    <!-- 树形多选控件 -->
                                    <template v-if="item.type === 'tree'">
                                        <el-tree
                                            ref="treeRef"
                                            :data="item.data"
                                            :props="item.defaultProps"
                                            default-expand-all
                                            show-checkbox
                                            @check-change="item.handleCheckChange"
                                            icon="ArrowRightBold"
                                            :style="item.style"
                                        >
                                            <template v-slot="{ node, data }">
                                                <span
                                                    class="ellipsis"
                                                    v-text="node.label"
                                                    :title="node.label"
                                                ></span>
                                            </template>
                                        </el-tree>
                                    </template>
                                    <!-- vnodes -->
                                    <template v-if="item.type === 'vnodes'">
                                        <div :style="item.style">
                                            <renderDom :render="item.render"></renderDom>
                                        </div>
                                    </template>
                                </el-form-item>
                            </template>
                        </template>
                    </el-form>
                    <!-- 查询重置按钮 -->
                    <div class="queryBtnList" v-if="props.tableFromOption.isShowQueryBtn">
                        <el-button color="rgba(13, 21, 30, 0)" @click="handlerQueryList">
                            查询
                        </el-button>
                        <el-button color="rgba(13, 21, 30, 0)" @click="resetForm">重置</el-button>
                    </div>
                </div>
            </template>
            <!-- 操作按钮 -->
            <div v-if="props.tableFromOption.isShowOperateBtn">
                <!-- 基本操作按钮 -->
                <template v-if="props.tableFromOption.isBasicOperateBtn">
                    <el-button
                        v-hasPermi="['add']"
                        @click="handlerClickAdd"
                        color="rgba(13, 21, 30, 0)"
                    >
                        新增
                    </el-button>
                </template>
                <!-- 其他操作按钮 -->
                <template
                    v-if="
                        props.tableFromOption.otherBtnList &&
                        props.tableFromOption.otherBtnList.length > 0
                    "
                >
                    <el-button
                        v-for="item in props.tableFromOption.otherBtnList"
                        :key="item.name"
                        v-hasPermi="item.hasPermi || ['*:*:*']"
                        color="rgba(13, 21, 30, 0)"
                        @click="item.handlerClick"
                    >
                        {{ item.name }}
                    </el-button>
                </template>
                <!-- 更多操作按钮 -->
                <template
                    v-if="
                        props.tableFromOption.moreActionsList &&
                        props.tableFromOption.moreActionsList.length > 0
                    "
                >
                    <el-dropdown trigger="click" popper-class="dropdownPopperClass">
                        <el-button color="rgba(13, 21, 30, 0)">更多操作</el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item
                                    v-for="item in props.tableFromOption.moreActionsList"
                                    :key="item.name"
                                    @click="item.handlerClick"
                                >
                                    {{ item.name }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </div>
        </div>
        <!-- table 表格 -->
        <template v-if="props.tableFromOption.isShowTable">
            <div class="query_table">
                <el-table
                    ref="elTables"
                    :data="props.tableFromOption.tableObj.tableData"
                    :header-row-style="{
                        ...props.tableFromOption.tableObj.headerRowStyle,
                    }"
                    :header-cell-style="{
                        background: 'rgba(0, 0, 0, 0)',
                        fontSize: '12px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        letterSpacing: '2px',
                        ...props.tableFromOption.tableObj.headerCellStyle,
                    }"
                    :cell-style="{
                        height: '36px',
                        fontSize: '12px',
                        padding: '3px 0',
                        cursor: props.tableFromOption.tableObj.isRowClick ? 'pointer' : 'default',
                        ...props.tableFromOption.tableObj.cellStyle,
                    }"
                    @selection-change="handleSelectionChange"
                    @cell-click="handleCellClick"
                    @row-click="rowClick"
                    row-key="id"
                    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
                    :highlight-current-row="props.tableFromOption.tableObj.isRowClick"
                    class="tableStyle"
                    height="100%"
                >
                    <template v-if="props.tableFromOption.tableObj.isSerialNumber">
                        <el-table-column
                            type="index"
                            align="center"
                            label=""
                            width="56"
                        ></el-table-column>
                    </template>
                    <template v-if="props.tableFromOption.tableObj.isMultiple">
                        <el-table-column
                            type="selection"
                            width="56"
                            ref="multipleTable"
                            align="center"
                        ></el-table-column>
                    </template>
                    <el-table-column
                        v-for="(col, c) in props.tableFromOption.tableObj.tableHeader"
                        :key="c"
                        :prop="col.prop"
                        :label="col.label"
                        :width="col.width"
                        :min-width="col.minWidth"
                        :align="col.align || 'center'"
                        :type="col.type"
                        :show-overflow-tooltip="col.popover || false"
                    >
                        <template #default="scope">
                            <template v-if="col.children">
                                <el-table-column
                                    v-for="(ch, o) in col.children"
                                    :key="o"
                                    :label="ch.label"
                                    :prop="ch.prop"
                                    :width="ch.width"
                                    :min-width="ch.minWidth"
                                    :align="ch.align || 'center'"
                                    :show-overflow-tooltip="ch.popover || false"
                                >
                                    <template #default="sonScope">
                                        <template v-if="ch.render">
                                            <renderDom
                                                :row="sonScope.row"
                                                :column="ch"
                                                :render="ch.render"
                                            ></renderDom>
                                        </template>
                                        <template v-else-if="ch.formatter">
                                            <span v-html="ch.formatter(sonScope.row, ch)" />
                                        </template>
                                        <template v-else-if="ch.handlerClick">
                                            <span
                                                style="cursor: pointer"
                                                @click="ch.handlerClick(sonScope.row, ch)"
                                            >
                                                {{ sonScope.row[ch.prop] || '--' }}
                                            </span>
                                        </template>
                                        <template v-else-if="ch.slotName">
                                            <slot
                                                :name="ch.slotName"
                                                :scope="{ row: sonScope.row, header: ch }"
                                            ></slot>
                                        </template>
                                        <template v-else>
                                            <span
                                                v-html="
                                                    formatterCellval(
                                                        sonScope.row,
                                                        ch,
                                                        sonScope.row[ch.prop]
                                                    )
                                                "
                                            ></span>
                                        </template>
                                    </template>
                                </el-table-column>
                            </template>
                            <template v-else-if="col.render">
                                <renderDom
                                    :row="scope.row"
                                    :column="col"
                                    :render="col.render"
                                ></renderDom>
                            </template>
                            <template v-else-if="col.formatter">
                                <span v-html="col.formatter(scope.row, col)" />
                            </template>
                            <template v-else-if="col.handlerClick">
                                <span
                                    style="cursor: pointer"
                                    @click="col.handlerClick(scope.row, col)"
                                >
                                    {{ scope.row[col.prop] || '--' }}
                                </span>
                            </template>
                            <template v-else-if="col.slotName">
                                <slot
                                    :name="col.slotName"
                                    :scope="{ row: scope.row, header: col }"
                                ></slot>
                            </template>
                            <template v-else>
                                <span
                                    v-html="formatterCellval(scope.row, col, scope.row[col.prop])"
                                ></span>
                            </template>
                        </template>
                    </el-table-column>
                    <!-- 按钮组 -->
                    <template
                        v-if="
                            props.tableFromOption.tableObj.operatesBtnObj &&
                            props.tableFromOption.tableObj.operatesBtnObj.operatesBtnList &&
                            props.tableFromOption.tableObj.operatesBtnObj.operatesBtnList.length > 0
                        "
                    >
                        <el-table-column
                            v-if="filterHasPermiStatus.some(item => item == true)"
                            :label="props.tableFromOption.tableObj.operatesBtnObj.title || '操作'"
                            :align="props.tableFromOption.tableObj.operatesBtnObj.align || 'center'"
                            :min-width="props.tableFromOption.tableObj.operatesBtnObj.minWidth"
                            :width="props.tableFromOption.tableObj.operatesBtnObj.width || 100"
                            :fixed="props.tableFromOption.tableObj.operatesBtnObj.fixed"
                        >
                            <template #default="scope">
                                <div class="operatesBtnStyle">
                                    <template
                                        v-for="item in props.tableFromOption.tableObj.operatesBtnObj
                                            .operatesBtnList"
                                    >
                                        <renderDom
                                            v-hasPermi="item.hasPermi || ['*:*:*']"
                                            :row="scope.row"
                                            :render="item.render"
                                        ></renderDom>
                                    </template>
                                </div>
                            </template>
                        </el-table-column>
                    </template>
                </el-table>
            </div>
        </template>
        <!-- 资产构件库 -->
        <template v-if="props.tableFromOption.isLibrary">
            <div class="query_library">
                <el-scrollbar>
                    <div class="libraryBox_main">
                        <div
                            class="libraryBox"
                            v-for="item in props.tableFromOption.libraryObj.memberPropertyList"
                            :key="item.name"
                            :style="{
                                cursor: props.tableFromOption.libraryObj.isMemberClick
                                    ? 'pointer'
                                    : 'default',
                            }"
                            @click="handlerClickMember(item)"
                        >
                            <el-image fit="cover" :src="item.url" />
                            <div class="lable">{{ item.name }}</div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </template>
        <!-- pagination 分页 -->
        <template v-if="props.tableFromOption.isShowTable && props.tableFromOption.totalCount">
            <div class="query_pagination">
                <el-pagination
                    small
                    layout="slot, prev, pager, next"
                    :total="props.tableFromOption.totalCount"
                    v-model:current-page="props.tableFromOption.pageNo"
                    v-model:page-size="props.tableFromOption.pageSize"
                    :page-sizes="[100, 200, 300, 400]"
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange"
                >
                    <span class="el-pagination__total">
                        共{{ props.tableFromOption.totalCount }}条记录
                    </span>
                </el-pagination>
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';
.table_module {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .query_form {
        display: flex;
        justify-content: space-between;
        .formContent {
            display: flex;
            justify-content: flex-start;
            .switchBtn {
                width: 48px;
                display: flex;
                margin-right: 20px;
                margin-top: 3px;
                .leftSwitchBtn {
                    width: 24px;
                    height: 24px;
                    background: url('@/assets/images/homeImages/assetManagement/calendar.png')
                        no-repeat;
                    background-size: 100% 100%;
                    cursor: pointer;
                    &.active {
                        background: url('@/assets/images/homeImages/assetManagement/calendarSelect.png')
                            no-repeat;
                    }
                }
                .rightSwitchBtn {
                    width: 24px;
                    height: 24px;
                    background: url('@/assets/images/homeImages/assetManagement/list.png') no-repeat;
                    background-size: 100% 100%;
                    cursor: pointer;
                    &.active {
                        background: url('@/assets/images/homeImages/assetManagement/listSelect.png')
                            no-repeat;
                    }
                }
            }
            .el-form {
                .el-form-item {
                    margin-right: 10px;
                    :deep(.el-form-item__label) {
                        font-weight: 400;
                        font-size: 12px;
                        color: #cccccc;
                        padding: 0 0 0 0;
                    }
                }
            }
            .queryBtnList {
                margin-left: 10px;
                display: flex;
            }
        }
    }
    .query_table {
        height: 0;
        flex-grow: 1;
        width: 100%;
        .tableStyle {
            font-weight: 400;
            font-size: 12px;
            font-family: PingFang SC;
            color: #ffffff;
        }
    }
    .query_library {
        height: 0;
        flex-grow: 1;
        width: 100%;
        .libraryBox_main {
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px 20px;
            .libraryBox {
                height: 270px;
                width: 300px;
                box-shadow: 0 0 30px 0 #041d2c inset;
                position: relative;
                .el-image {
                    height: 100%;
                    width: 100%;
                }
                .lable {
                    position: absolute;
                    bottom: 0;
                    height: 40px;
                    width: 100%;
                    background: #023240d8;
                    font-weight: 500;
                    font-size: 16px;
                    text-align: center;
                    color: #ffffff;
                    line-height: 40px;
                }
            }
        }
    }
    .query_pagination {
        padding: 26px 0 0 0;
        height: 24px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
:deep(.el-pagination) {
    --el-pagination-button-width-small: 20px;
    --el-pagination-button-height-small: 20px;

    .el-pagination__total {
        font-weight: 500;
        font-size: 12px;
        color: #ffffff;
    }

    .el-pager {
        li {
            background: none;
            font-weight: 500;
            font-size: 12px;
            color: #ffffff;
        }

        li.is-active {
            color: #32fdfc;
        }
    }
}
:deep(.el-table) {
    --el-table-border-color: rgba(0, 0, 0, 0);
    --el-table-tr-bg-color: rgba(0, 0, 0, 0);
    --el-table-border: 0;
    --el-table-bg-color: rgba(0, 0, 0, 0);
    --el-table-row-hover-bg-color: rgba(2, 50, 64, 1);
    --el-table-current-row-bg-color: rgba(2, 50, 64, 1);
    .el-table__row:nth-child(2n + 1) {
        background-color: rgba(2, 50, 64, 0.6);
    }
    .el-table__row:nth-child(2n) {
        background-color: rgba(0, 0, 0, 0);
    }
}
.domainStyle {
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
    width: '520px';
}
:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background-color: rgba(31, 255, 147, 0.8) !important;
    border-color: rgba(31, 255, 147, 0.8) !important;
}
:deep(.el-checkbox__inner) {
    background-color: rgba(2, 50, 64, 0.3) !important;
    border-color: rgba(15, 151, 103, 100) !important;
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner) {
    background-color: rgba(31, 255, 147, 0.8) !important;
    border-color: rgba(31, 255, 147, 0.8) !important;
}
:deep(.el-checkbox) {
    --el-checkbox-disabled-checked-icon-color: rgba(255, 255, 255, 1);
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner::before) {
    content: '';
    position: absolute;
    display: block;
    background-color: var(--el-checkbox-checked-icon-color);
    height: 2px;
    transform: scale(0.5);
    left: 0;
    right: 0;
    top: 5px;
}
.el-checkbox-group {
    .el-checkbox {
        margin-right: 15px;
        :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
            color: #ccc;
        }
        :deep(.el-checkbox__input + .el-checkbox__label) {
            color: #ccc;
        }
    }
}
.upload_rule {
    font-size: 12px;
    line-height: 30px;
    .uploadTip {
        margin-top: 7px;
        height: 34px;
        background: rgb(3, 25, 29);
        font-weight: 400;
        font-size: 12px;
        text-align: left;
        color: #ffffff;
        padding-left: 10px;
        display: flex;
        align-items: center;
        .text {
            margin-left: 6px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .icon {
            width: 12px;
            height: 12px;
            background: url('@/assets/images/homeImages/assetManagement/lianjie.png') no-repeat;
            background-size: 100% 100%;
        }
    }
}
:deep(.el-upload-list) {
    margin: 5px 0 0;
    .el-upload-list__item {
        background: rgb(3, 25, 29);
    }
    .el-upload-list__item-name {
        color: #cccccc;
    }
    .el-upload-list__item:hover {
        background: rgb(3, 25, 29);
    }
}
.leftContent {
    margin: 0 20px 0 10px;
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    color: #ffffff;
}
.operatesBtnStyle {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-right: 10px;
}
:deep(.el-slider) {
    .el-slider__runway {
        height: 50px;
        background: #041d2c00;
        border: 1px solid #275252;
        border-radius: 0%;
    }
    .el-slider__bar {
        height: 50px;
        border-radius: 0%;
        background: linear-gradient(to right, rgba(0, 255, 132, 0.6), rgba(0, 255, 132, 0.2));
    }
    .el-slider__stop {
        height: 8px;
        width: 1px;
        background: rgb(48, 175, 114);
    }
    .el-slider__marks-stop {
        height: 15px;
        width: 1px;
        background: rgb(48, 175, 114);
    }
    .el-slider__button {
        position: absolute;
        top: -2px;
        left: 12px;
        background: url('@/assets/images/homeImages/setUp/timeCursor.png') no-repeat;
        background-size: 100% 100%;
        border: none;
        border-radius: 0%;
        width: 12px;
        height: 15px;
    }
}
:deep(.el-table__expand-icon) {
    & > .el-icon {
        color: #ffffff;
        transform: scale(1.5);
    }
}
.el-tree {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    background-color: #022722;
    flex-grow: 1;
    --el-tree-node-hover-bg-color: linear-gradient(
        to right,
        rgba(31, 255, 147, 0),
        rgba(31, 255, 147, 0.5)
    );
    :deep(.el-tree-node) {
        .el-tree-node__content {
            --el-tree-node-content-height: 32px;
        }

        .el-tree-node__content:hover {
            background: linear-gradient(
                to right,
                rgba(31, 255, 147, 0),
                rgba(31, 255, 147, 0.5)
            ) !important;
        }
    }
}
</style>
