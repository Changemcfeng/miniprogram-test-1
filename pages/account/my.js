// pages/goods/good.js
Page({
 
  data:{
    traffic: ['../images/h.png'],
    status: [{ st: '账户状态', at: '正常' }, 
    {st: '账户', at: '187****7850'}, 
    { st: '付款方式', at: '已开通小额免密'},
    { st: '欠费金额', at: '0元'}
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "我的帐户"
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

  },
  imageLoad: function (e) {
    var imageSize = this.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  imageUtil: function (e) {
  var imageSize = {};
  var originalWidth = e.detail.width; // 图片原始宽
  var originalHeight = e.detail.height; // 图片原始高
  var originalScale = originalHeight / originalWidth; 
  //获取屏幕宽高
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = windowHeight / windowWidth;
      if (originalScale < windowscale) { // 图片高宽比小于屏幕高宽比
        //图片缩放后的宽为屏幕宽
        imageSize.imageWidth = windowWidth*(0.8);
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth*(0.8);
      } else { // 图片高宽比大于屏幕高宽比
        //图片缩放后的高为屏幕高
        imageSize.imageHeight = windowHeight * (0.8);
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight * (0.8);
      }
    }
  })
  return imageSize;
}
})