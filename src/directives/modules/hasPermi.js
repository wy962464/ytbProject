// 权限管理的自定义指令
const hasPermi = {
    mounted(el, binding, vnode) {
        const { value } = binding
        const all_permission = "*:*:*";
        const permissions = ["add", "del", "update"]
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