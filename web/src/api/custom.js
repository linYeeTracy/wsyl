import axios from '@/libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getCustom = (params) => {
  return axios.request({
    url: '/customManager/customs/',
    method: 'get',
    params
  })
}
/**
 * 新增客户信息
 * @param {*} data
 */
export const addCustom = (data) => {
  return axios.request({
    url: '/customManager/customs/',
    method: 'post',
    data
  })
}

/**
 * 更新客户信息
 * @param {*} id
 * @param {*} data
 */
export const updateCustom = (id, data) => {
  return axios.request({
    url: `customs/${id}`,
    method: 'put',
    data
  })
}

/**
 * 删除客户信息
 * @param {*} id
 * @param {*} data
 */
export const delCustom = (id, data) => {
  return axios.request({
    url: `customs/${id}`,
    method: 'delete'
  })
}
