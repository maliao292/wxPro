import {
  goodsDetails
} from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proDetails: {
      pics: [],
      goods_name: '',
      goods_introduce: '',
      goods_price: ''
    }
  },

  showBig(e) {
    console.log();
    let urls = this.data.proDetails.pics.map(res => res.pics_mid)
    let current = urls[e.currentTarget.dataset.ind]
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    goodsDetails(options).then(res => {
      let {
        pics,
        goods_name,
        goods_introduce,
        goods_price
      } = res.message
      this.setData({
        proDetails: {
          pics,
          goods_name,
          goods_introduce,
          goods_price
        }
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