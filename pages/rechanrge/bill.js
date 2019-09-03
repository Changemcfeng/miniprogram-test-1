// pages/rechanrge/bill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   bill:[{ar:'50元',br:'优惠价 49.99',cr:' '},
     { ar: '100元', br: '优惠价 99.98', cr: ' ' },
     { ar: '200元', br: '优惠价 199.96', cr: ' ' },
     { ar: '300元', br: '优惠价 299.94', cr: ' ' },
     { ar: '500元', br: '优惠价 499.90', cr: ' ' }],
    billa: [
      { ar: '100元', br: '优惠价 98.00', cr: ' ' },
      { ar: '150元', br: '优惠价 147.00', cr: ' ' },
      { ar: '200元', br: '优惠价 196.00', cr: ' ' },
      { ar: '250元', br: '优惠价 245.00', cr: ' ' },
      { ar: '300元', br: '优惠价 294.00', cr: ' ' },
      { ar: '400元', br: '优惠价 392.00', cr: ' ' },
      { ar: '500元', br: '优惠价 490.00', cr: ' ' },
      { ar: '50元', br: '优惠价 48.00', cr: '补货中' },
    ],
    thoungh:[
      { ar: '1G', br: '优惠价 2.90元', cr: '24小时有效' },
      { ar: '5G', br: '优惠价 6.00元', cr: '24小时有效' },
      { ar: '1G', br: '优惠价 9.00元', cr: '7天有效' },
      { ar: '2G', br: '优惠价 10.00元', cr: '7天有效 ' },
      { ar: '20G', br: '优惠价 19.00元', cr: '7天有效' },
      { ar: '500M', br: '优惠价 13.00元', cr: '20天有效' }
    ],

    tei:['特惠0-72小时到帐'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "充多多话费流量充值"
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