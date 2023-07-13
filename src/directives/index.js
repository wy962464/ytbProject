import hasPermi from "./modules/hasPermi";
import waterMarker from "./modules/waterMarker";
import debounce from "./modules/debounce";
import throttle from "./modules/throttle";
import draggable from "./modules/draggable";
const directivesList = {
  hasPermi,
  waterMarker,
  debounce,
  throttle,
  draggable
};

const directives = {
  install: function (app) {
    Object.keys(directivesList).forEach((key) => {
      // 注册所有自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
