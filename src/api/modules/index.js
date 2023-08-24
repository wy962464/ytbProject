import http from "@/api/http";

/**
 * @description 文件导出--文件流
 * @param {String} url  接口地址 
 * @param {Object} data  请求参数
 * @param {String} fileName  文件名称
 */
export function getExportFile(url, data, fileName) {
    http.getFile(url, data, { isLoading: true }).then(res => {
        let blob = new Blob([res.data], {
            type: "application/vnd.ms-excel; charset=UTF-8",
        });
        const url = window.URL.createObjectURL(blob);
        let ele = document.createElement("a");
        ele.setAttribute("href", url); //设置下载文件的url地址
        ele.setAttribute("download", fileName); //用于设置下载文件的文件名
        ele.click();
        ele.remove();
    })
}