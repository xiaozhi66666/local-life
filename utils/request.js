const baseUrl = 'https://www.escook.cn'

// 封装一个请求基准方法
const request = ({
  url,
  method,
  data
}) => {
  url,
  method,
  data
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: method || 'GET',
      data: data || {},
      success(res) {
        resolve(res)
      }
    })
  })
}

export default request