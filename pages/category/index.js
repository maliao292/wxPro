// pages/category/index.js
import {categoryData} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    activeMenu:0
  },
  choseClass(e){
    console.log(e.currentTarget.dataset.ind)
    let activeMenu = e.currentTarget.dataset.ind
    this.setData({activeMenu})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    categoryData().then(res=>{
      this.setData({
        listArr:res.message
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})