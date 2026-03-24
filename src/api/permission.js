import request from '@/utils/request'

/**
 * 获取所有权限
 */
export const permissionList = () => {
  return request({
    url: '/permission/list',
  })
}

/**
 * 获取指定角色的权限
 */
export const rolePermission = (roleId) => {
  return request({
    url: `/role/permission/${roleId}`,
  })
}
