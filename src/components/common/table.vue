<script setup>
import { ref, nextTick, watchEffect, onMounted } from 'vue';
import { checkedTypeCellval } from '@/utils/index';
import { useTableFrom } from '@/utils/tableFromHandler';
import uploadFile from '@/components/common/uploadFile.vue';

const fromRef = ref(null);
const uploadRef = ref(null);
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
 * @param tableFromOption.isQueryBtn 是否显示查询重置按钮
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
    'handleSelectionChange',
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
        if (checkedTypeCellval(props.tableFromOption.modelFormValue[key]) === 'Undefined') {
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
    emit('handleSelectionChange', val);
}
// 点击选择某个单元格
function handleCellClick(row, column, cell, event) {
    emit('handleCellClick', row, column, cell, event);
}
// 某一行被点击
function rowClick(row, column, event) {
    if (props.tableFromOption.tableObj.isRowClick) {
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
    if (checkedTypeCellval(cellValue) === 'Undefined' || !Boolean(String(cellValue))) {
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
};
defineExpose({
    resetForm,
    fromRef,
    uploadRef,
});
</script>

<template>
    <div class="table_module">
        <!-- form 表单-->
        <template v-if="props.tableFromOption.isShowForm">
            <div class="query_form">
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
                        :label-width="`${props.tableFromOption.labelWidth}px`"
                        :inline="props.tableFromOption.inline || false"
                        hide-required-asterisk
                    >
                        <template v-for="item in props.tableFromOption.fromItem" :key="item.label">
                            <!-- 动态表单 -->
                            <template v-if="item.type === 'domains'">
                                <template
                                    v-for="(domain, index) in props.tableFromOption.modelFormValue
                                        .domainList"
                                >
                                    <el-form-item
                                        label="程序名称："
                                        :prop="'domainList.' + index + '.value'"
                                        :label-width="`${item.labelWidth}px`"
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
                                        :label-width="`${item.labelWidth}px`"
                                    >
                                        <el-input
                                            autosize
                                            v-model="domain.value"
                                            style="width: 430px; margin-right: 20px"
                                            placeholder="请输入"
                                            type="textarea"
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
                                    :label-width="`${item.labelWidth}px`"
                                    :style="{
                                        alignItems:
                                            item.type == 'uploadFile' ? 'flex-start' : 'center',
                                    }"
                                >
                                    <!-- 输入框 -->
                                    <template v-if="item.type === 'input'">
                                        <el-input
                                            :placeholder="item.placeholder"
                                            :style="item.style"
                                            :suffix-icon="item.suffixIcon"
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
                                        >
                                            <el-option
                                                v-for="option in item.options"
                                                :key="option.label"
                                                :label="option.label"
                                                :value="option.value"
                                            />
                                        </el-select>
                                    </template>
                                    <!-- 树形选择 -->
                                    <template v-if="item.type === 'treeSelect'">
                                        <el-tree-select
                                            popper-class="treeSelectPopperClass"
                                            default-expand-all
                                            v-model="
                                                props.tableFromOption.modelFormValue[`${item.prop}`]
                                            "
                                            :placeholder="item.placeholder"
                                            :style="item.style"
                                            :data="props.tableFromOption.treeSelectList"
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
                                            <template #content v-if="item.limit === 18">
                                                <div class="leftContent">
                                                    <div
                                                        class="text"
                                                        v-if="
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ] &&
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ].length > 0
                                                        "
                                                    >
                                                        {{
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ][0].name
                                                        }}
                                                    </div>
                                                    <div class="text" v-else>-模型</div>
                                                </div>
                                            </template>
                                            <template #tip v-if="item.limit === 1">
                                                <div class="el-upload__tip uploadTip">
                                                    <div class="icon"></div>
                                                    <div
                                                        class="text"
                                                        v-if="
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ] &&
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ].length > 0
                                                        "
                                                    >
                                                        {{
                                                            props.tableFromOption.modelFormValue[
                                                                `${item.prop}`
                                                            ][0].name
                                                        }}
                                                    </div>
                                                    <div class="text" v-else>
                                                        {{
                                                            item.rules && item.rules.length > 0
                                                                ? item.rules[0].message
                                                                : '请选择文件'
                                                        }}
                                                    </div>
                                                </div>
                                            </template>
                                        </uploadFile>
                                    </template>
                                    <!-- vnodes -->
                                    <template v-if="item.type === 'vnodes'">
                                        <renderDom :render="item.render"></renderDom>
                                    </template>
                                </el-form-item>
                            </template>
                        </template>
                    </el-form>
                    <!-- 查询重置按钮 -->
                    <div class="queryBtnList" v-if="props.tableFromOption.isQueryBtn">
                        <el-button color="rgba(13, 21, 30, 0)" @click="handlerQueryList">
                            查询
                        </el-button>
                        <el-button color="rgba(13, 21, 30, 0)" @click="resetForm">重置</el-button>
                    </div>
                </div>
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
                        <el-button v-hasPermi="['del']" color="rgba(13, 21, 30, 0)">修改</el-button>
                        <el-button v-hasPermi="['update']" color="rgba(13, 21, 30, 0)">
                            删除
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
        </template>
        <!-- table 表格 -->
        <template v-if="props.tableFromOption.isShowTable">
            <div class="query_table">
                <el-table
                    ref="elTable"
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
                        height: '10px',
                        fontSize: '12px',
                        padding: '3px 0',
                        cursor: props.tableFromOption.tableObj.isRowClick ? 'pointer' : 'default',
                        ...props.tableFromOption.tableObj.cellStyle,
                    }"
                    @selection-change="handleSelectionChange"
                    @cell-click="handleCellClick"
                    @row-click="rowClick"
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
                            :label="props.tableFromOption.tableObj.operatesBtnObj.title || '操作'"
                            :align="props.tableFromOption.tableObj.operatesBtnObj.align || 'center'"
                            :min-width="props.tableFromOption.tableObj.operatesBtnObj.minWidth"
                            :width="props.tableFromOption.tableObj.operatesBtnObj.width"
                            :fixed="props.tableFromOption.tableObj.operatesBtnObj.fixed"
                        >
                            <template #default="scope">
                                <template
                                    v-for="item in props.tableFromOption.tableObj.operatesBtnObj
                                        .operatesBtnList"
                                >
                                    <renderDom :row="scope.row" :render="item.render"></renderDom>
                                </template>
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
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
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
            grid-gap: 20px 20px;
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
:deep(.el-checkbox) {
    --el-checkbox-disabled-checked-icon-color: rgba(255, 255, 255, 1);
}
:deep(.el-checkbox__input.is-indeterminate .el-checkbox__inner::before) {
    background-color: rgba(0, 0, 0, 0);
}
.uploadTip {
    height: 32px;
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
    }
    .icon {
        width: 12px;
        height: 12px;
        background: url('@/assets/images/homeImages/assetManagement/lianjie.png') no-repeat;
        background-size: 100% 100%;
    }
}
.leftContent {
    margin: 0 20px 0 10px;
    font-weight: 400;
    font-size: 12px;
    text-align: left;
    color: #ffffff;
}
</style>
