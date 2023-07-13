//  水印自定义指令
//  设置水印文案，颜色，字体大小即可
//  例子：<div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)',font:'16px Microsoft JhengHei'}"></div>
const waterMarker = {
    mounted(el, binding) {
        // binding.value.text 水印文字 ，el 父元素，binding.value.font 字体，binding.value.textColor 文字颜色
        let can = document.createElement("canvas");
        el.appendChild(can);
        can.width = 205;
        can.height = 140;
        can.style.display = "none";
        let cans = can.getContext("2d");
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = binding.value.font || "16px Microsoft JhengHei";
        cans.fillStyle = binding.value.textColor || "rgba(180, 180, 180, 0.3)";
        cans.textAlign = "left";
        cans.textBaseline = "Middle";
        cans.fillText(binding.value.text, can.width / 10, can.height / 2);
        el.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
    }
}
export default waterMarker;