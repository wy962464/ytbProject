let loading;
let loadingRequestCount = 0;
/* 显示loading */
export function showLoading(target) {
    if (loadingRequestCount === 0) {
        loading = ElLoading.service({
            lock: true,
            text: "加载中，请耐心等候...",
            background: "rgba(255, 255, 255 ,0.8)",
            target: target || "body",
        });
    }
    loadingRequestCount++;
}

/* 隐藏loading */
export function hideLoading() {
    if (loadingRequestCount <= 0) return;
    loadingRequestCount--;
    if (loadingRequestCount === 0) {
        loading.close();
        loading = null;
    }
}