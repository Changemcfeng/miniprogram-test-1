// pages/recodes/recode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rec:[
      { am: '乘车类型:', bm: '公交消费' },
      { am: '乘车时间:', bm: '2019-07-12- 18:26:13' },
      { am: '流水号:', bm: '00000000000000495367836' },
    ],
    mon: '金额: 2元',
    mon1:'支付成功'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  wx.setNavigationBarTitle({
    title: "乘车纪录"
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