// 防抖自定义指令
const debounce = {
    mounted(el, binding) {
        if (typeof binding.value !== "function") {
            throw "callback must be a function"
        }
        let timer = null;
        el.handClick = function () {
            if (timer) {
                clearInterval(timer);
            }
            timer = setTimeout(() => {
                binding.value();
            }, 500);
        }
        el.addEventListener("click", el.handClick);
    },
    beforeUnmount(el) {
        el.removeEventListener("click", el.handClick);
    }
}
export default debounce;