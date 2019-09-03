// pages/query/transit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
    height:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var he=this.accMul(windowHeight,0.35);
    var stl = { height : he+"px"}
    this.setData(stl);
    console.log(windowHeight);
    console.log(he);
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
  loadip:function(){
    // wx.request({
    //   url: 'http://ip-api.com/json',
    //   success: function (e) {
    //     console.log(e.data);
    //   }
    // })
    
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
  userInput: function (e){
    this.setData({
      user: e.detail.value
    })
  },
 accMul:function(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch(e) { }
        try { m += s2.split(".")[1].length } catch(e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  }
  // jisu:function(e){
  //   this.loadip();
  //   var _this=this;
  //   var name=this.data.user
  //   console.log(name);
  //   wx.showToast({
  //     title: '确定',
  //     icon: 'success',
  //     duration: 2000
  //   })
  //   wx.request({
  //     url: 'https://api.jisuapi.com/ip/location?appkey=6efc8a091b1e55fd&ip=210.21.28.34', 
  //     header: {
  //       'content-type': 'application/json' 
  //     },
  //     success(res) {
  //       console.log(res.data);
  //       var aa={
  //         area:res.data.result.area,
  //         city: res.data.result.city,
  //         country:res.data.result.country,
  //         province:res.data.result.province,
  //         ip: res.data.result.ip,
  //         type: res.data.result.type
  //       }
  //       _this.setData(aa);
  //       }
  //   })}

  })