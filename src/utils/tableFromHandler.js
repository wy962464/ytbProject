import { reactive } from 'vue'
import { DialogStore } from '@/store/modules/dialog.js';

const dialogStore = DialogStore();
export function useTableFrom(request, formObj) {
    let tableObj = reactive({
        tableData: [],
        totalCount: 0, // 总数
    })
    let pagination = reactive({
        pageNo: 1,
        pageSize: 10
    })
    // 查询表格数据
    async function getTableData() {
        dialogStore.$patch({
            dialogInfor: {
                tableLoading: true,
            },
        });
        try {
            const { data: tableData } = await request({ ...formObj, ...pagination })
            console.log(tableData);
            if (Reflect.has(tableData, 'result')) {
                let { result, totalCount } = tableData;
                tableObj.tableData = result
                tableObj.totalCount = 200
            } else {
                tableObj.tableData = tableData.data
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
        pagination.pageNo = 1
        getTableData()
    }
    // 重置表单
    function handleResetForm() {
        pagination.pageNo = 1;
        pagination.pageSize = 10;
        getTableData()
    }
    // 切换页码
    function handleCurrentChange(val) {
        pagination.pageNo = val
        getTableData()
    }
    return {
        tableObj,
        pagination,
        getTableData,
        handlerQueryList,
        handleCurrentChange,
        handleResetForm
    }
}