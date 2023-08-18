// 扁平化菜单数据处理路由菜单
export function getFlatArr(menuList = []) {
    let newMenuList = JSON.parse(JSON.stringify(menuList));
    return newMenuList.reduce((pre, current) => {
        let flatArr = [...pre, current];
        if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
        return flatArr;
    }, []);
}
// 递归查询当前路径所对应的顶级菜单对象
export function findMenuByPath(menuList, path) {
    for (const item of menuList) {
        if (item.path === path) return item;
        if (item.children) {
            const res = findMenuByPath(item.children, path);
            if (res) return item;
        }
    }
    return null;
}
/**
 * @description 递归查询对象
 * @param {Array} menuList  列表数据
 * @param {*} path      需要查询的值
 * @param {*} name      需要查询的属性
 * @returns 
 */
export function findMenuPath(menuList, path, name) {
    for (const item of menuList) {
        if (item[name] === path) return item;
        if (item.children) {
            const res = findMenuPath(item.children, path, name);
            if (res) return res;
        }
    }
    return null;
}
// 过滤 isHide == true (需要显示的菜单)
export function showMenuList(menuList = []) {
    let newMenuList = JSON.parse(JSON.stringify(menuList));
    return newMenuList.filter(item => {
        item.children?.length && (item.children = showMenuList(item.children));
        return !item.meta?.isHide;
    });
}
// 过滤 isKeepAlive == true (需要缓存的菜单)
export function getKeepAliveRouterName(menuList = [], keepAliveArr = []) {
    menuList.forEach((item) => {
        item.meta.isKeepAlive && item.name && keepAliveArr.push(item.name);
        item.children?.length && getKeepAliveRouterName(item.children, keepAliveArr);
    });
    return keepAliveArr;
}
// 判断数据类型
export function checkedTypeCellval(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}
// 字体转换 px -> rem
export function fontSize(res) {
    let docEl = document.documentElement,
        clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = clientWidth / 1920;
    return res * fontSize;
}
// 判断是否有内容
export function isContent(cellValue, symbol = '--') {
    if (checkedTypeCellval(cellValue) === 'Undefined' || !Boolean(String(cellValue))) {
        return symbol;
    } else {
        return cellValue;
    }
}
// 获取assets静态资源
export function getImageUrl(url) {
    return new URL(`../assets/images/${url}`, import.meta.url).href;
}
// 清空（终止）上一个页面正在请求的内容
export function clearRequest() {
    if (window._axiosPromiseArr && window._axiosPromiseArr.length > 0) {
        window._axiosPromiseArr.forEach((ele, index) => {
            ele.cancel();
            delete window._axiosPromiseArr[index];
        });
    }
}