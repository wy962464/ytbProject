import { reactive } from 'vue'
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
export function useTableFrom(request, formObj) {
    let dataListObj = reactive({
        dataList: [],
        totalCount: 0, // 总数
    })
    let pagination = reactive({
        pageNo: 1,
        pageSize: 10
    })
    // 查询表格数据
    async function getDataList() {
        dialogStore.$patch({
            dialogInfor: {
                tableLoading: true,
            },
        });
        try {
            const { data: dataList } = await request({ ...formObj, ...pagination })
            if (Reflect.has(dataList, 'result')) {
                let { result, totalCount } = dataList;
                dataListObj.dataList = result
                dataListObj.totalCount = 200
            } else {
                dataListObj.dataList = dataList.data
            }
        } catch (e) {
            console.error(e);
        }
        dialogStore.$patch({
            dialogInfor: {
                tableLoading: false,
            },
        });
    }
    // 查询方法
    function handlerQueryList() {
        if (!request) return
        pagination.pageNo = 1
        getDataList()
    }
    // 重置表单
    function handleResetForm() {
        if (!request) return
        pagination.pageNo = 1;
        pagination.pageSize = 10;
        getDataList()
    }
    // 切换页码
    function handleCurrentChange(val) {
        if (!request) return
        pagination.pageNo = val
        getDataList()
    }
    return {
        dataListObj,
        pagination,
        getDataList,
        handlerQueryList,
        handleCurrentChange,
        handleResetForm,
    }
}