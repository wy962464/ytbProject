// 扁平化菜单数据处理路由菜单
export function getFlatArr(menuList = []) {
    let newMenuList = JSON.parse(JSON.stringify(menuList));
    return newMenuList.reduce((pre, current) => {
        let flatArr = [...pre, current];
        if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
        return flatArr;
    }, []);
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