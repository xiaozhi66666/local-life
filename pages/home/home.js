// pages/home/home.js

// 引入请求首页banners图的方法
import {
  getBannerAPI
} from '../../api/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页banners图的数据
    banners: []
  },
  async getBanners() {
    const {
      data
    } = await getBannerAPI()
    console.log(data);
    this.setData({
      banners: data
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanners()
  },





  change(current, source) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})