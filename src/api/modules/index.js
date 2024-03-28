import http from "@/api/http";

/**
 * @description 文件导出--文件流
 * @param {String} url  接口地址 
 * @param {Object} data  请求参数
 * @param {String} fileName  文件名称
 * @param {String} type  文件类型
 */
export function getExportFile(url, data, fileName, type) {
    http.getFlie(url, data).then(res => {
        let blob = new Blob([res.data], {
            type: type ?? res.data.type,
        });
        const url = window.URL.createObjectURL(blob);
        let ele = document.createElement("a");
        ele.setAttribute("href", url);
        ele.setAttribute("download", fileName);
        ele.click();
        ele.remove();
        window.URL.revokeObjectURL(url)
    })
}