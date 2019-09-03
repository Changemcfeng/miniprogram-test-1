// pages/wxqrcode/demo1.js
const QR = require('./wxqrcode.js');

Page({

  data: {
    // qrcode
    text: 'https://blog.csdn.net/qq_41592652',
    qrcode: '',
    flush:["如刷新失败，请点击"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "乘车码",
    })

      // wx.setNavigationBarColor({

      //   frontColor: '#ffffff',

      // backgroundColor: '#3a74da',})


    var that = this;
    let qrcodeSize = that.getQRCodeSize()
    that.createQRCode(that.data.text, qrcodeSize)
  },
  //适配不同屏幕大小的canvas
  getQRCodeSize: function () {
    var size = 0;
    try {
      var res = wx.getSystemInfoSync();
      var scale = res.windowWidth / 750; 
      var width = 300 * scale;
      size = width;
    } catch (e) {
      // Do something when catch error
      console.log("获取设备信息失败" + e);
      size = 150;
    }
    return size;
  },
  createQRCode: function (text, size) {
    //调用插件中的draw方法，绘制二维码图片

    let that = this
    try {
      // console.log('QRcode: ', text, size)
      let _img = QR.createQrCodeImg(text, {
        size: parseInt(size)
      })

      that.setData({
        'qrcode': _img
      })
    } catch (e) {
      console.warn(e)
    }

   },
  // bind_text(e) {
  //   let text = e.detail.value;
  //   this.setData({
  //     text: text
  //   });
  // },
  // bind_sumbit(e) {
  //   this.onLoad();
  // }
});