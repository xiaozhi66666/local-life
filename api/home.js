import request from '../utils/request'

/**
 * 获取banner图数据
 */
export const getBannerAPI = () => request({
  url: '/slides'
})

/**
 * 获取九宫格图数据
 */
export const getGridsAPI = () => request({
  url: '/categories'
})