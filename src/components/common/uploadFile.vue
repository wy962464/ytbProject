<!-- 文件上传 -->
<script setup>
import { ref, watch, computed } from 'vue';

const uploadRef = ref(null);
const props = defineProps({
    // 样式
    style: {
        type: Object,
        default: () => {},
    },
    // 是否启用拖拽上传
    drag: {
        type: Object,
        default: () => {},
    },
    // 接受上传的文件类型
    accept: {
        type: Array,
        default: () => [],
    },
    // 允许上传文件的最大数量
    limit: {
        type: Number,
        default: 1,
    },
    // 是否支持多选文件
    multiple: {
        type: Boolean,
        default: false,
    },
    // 父级文件列表
    fileList: {
        type: Array,
        default: () => [],
    },
});
const emit = defineEmits(['update:fileList']);
const _fileList = ref(props.fileList);
// 监听 props.fileList 列表默认值改变
watch(
    () => props.fileList,
    newValue => {
        _fileList.value = newValue;
    }
);
const fileBeforeUpload = rawFile => {
    return new Promise((resolve, reject) => {
        const filSize = rawFile.size / 1024 / 1024 < 3;
        const filType = props.accept.includes(rawFile.type);
        if (!filSize) {
            setTimeout(() => {
                ElNotification({
                    title: '温馨提示',
                    message: `文件${rawFile.name}大小超过${3}M！`,
                    type: 'warning',
                });
            }, 0);
            return reject(false);
        } else {
            return resolve(true);
        }
    });
};
// 文件上传之前
const uploadFileBeforeUpload = rawFile => {
    return fileBeforeUpload(rawFile);
};
// 文件数超出规定数量
const handleExceed = files => {
    if (props.limit === 1) {
        uploadRef.value?.clearFiles();
        const file = files[0];
        uploadRef.value?.handleStart(file);
    } else {
        ElNotification({
            title: '温馨提示',
            message: `当前最多只能上传${props.limit}个文件，请移除后上传！`,
            type: 'warning',
        });
    }
};
// 文件上传错误
const uploadError = (error, uploadFile, uploadFiles) => {
    console.log(error, uploadFile, uploadFiles);
    setTimeout(() => {
        ElNotification({
            title: '温馨提示',
            message: `文件${uploadFile.name}上传失败，请您重新上传！`,
            type: 'error',
        });
    }, 0);
};
// 文件上传成功
const uploadSuccess = (response, uploadFile) => {
    if (!response) return;
    ElNotification({
        title: '温馨提示',
        message: `文件${uploadFile.name}上传成功`,
        type: 'success',
    });
};
const handleChange = (uploadFile, uploadFiles) => {
    emit('update:fileList', uploadFiles);
};
const uploadUrlBackMessage = computed(() => {
    return 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d5';
});
const handleFileSubmit = () => {
    uploadRef.value?.submit();
};
defineExpose({
    handleFileSubmit,
});
</script>

<template>
    <el-upload
        ref="uploadRef"
        v-model:file-list="_fileList"
        :style="style"
        :show-file-list="limit === 1 ? false : true"
        :action="uploadUrlBackMessage"
        :multiple="multiple"
        :limit="limit"
        :drag="drag"
        :accept="accept.join(',')"
        :auto-upload="false"
        :on-exceed="handleExceed"
        :on-error="uploadError"
        :on-change="handleChange"
        :before-upload="uploadFileBeforeUpload"
        :on-success="uploadSuccess"
    >
        <slot name="content"></slot>
        <el-button class="uploadFileBtn" color="rgba(13, 21, 30, 0)">选择文件</el-button>
        <template #tip>
            <slot name="tip"></slot>
        </template>
    </el-upload>
</template>

<style scoped lang="scss">
@import '@/assets/css/elementDefault.scss';
.uploadFileBtn {
    margin-bottom: 0;
    height: 32px;
}
</style>
