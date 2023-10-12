// 权限管理的自定义指令
/**
 * @description  权限详情
 * @param add 新增
 * @param del 删除
 * @param update 修改
 * @param details 查看/详情
 * @param maintenance 维修
 */
const hasPermi = {
    mounted(el, binding, vnode) {
        const { value } = binding
        const all_permission = "*:*:*";
        const permissions = ["add", "del", "update", 'maintenance', 'details']
        if (value && value instanceof Array && value.length > 0) {
            const permissionFlag = value
            const hasPermissions = permissions.some(permission => {
                return all_permission === permission || permissionFlag.includes(permission)
            })
            if (!hasPermissions) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            if (!permissions.includes(value)) el.parentNode.removeChild(el);
        }
    }
}
export default hasPermi;