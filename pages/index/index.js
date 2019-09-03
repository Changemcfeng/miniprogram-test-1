//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    iconUrl:[
      {at: '../images/a.png', bt: '我的帐户',},
      {at: '../images/b.png', bt:'乘车记录'},
      {at: '../images/c.png', bt: '缴清欠款'},
      {at: '../images/d.png', bt: '使用帮助'},
      {at: '../images/e.png', bt:'话费充值'},
      {at: '../images/f.png', bt:'公交查询'},
    ],
    sweepcode:'../images/g.png',
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 3000,
  },
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success: function (res) {
    //     aa: res.windowHeight * (0.5),
    //       console.log(res.windowHeight * (0.5));
    //   },
    // })
  }
 ,
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  sweepq :function(e){
    wx.navigateTo({
      url: '/pages/sweep/bus',
    })
  },
  indexto:function(e){
    var id = e.target.dataset.id;;
    switch(id){
      case 0:
        wx.navigateTo({
          url: '/pages/account/my',
        });break;
      case 1:
        wx.navigateTo({
          url: '/pages/recodes/recode',
        }); break;
      case 2:
        wx.navigateTo({
          url: '/pages/arreas/aa',
        }); break;
       case 3:
        wx.navigateTo({
          url: '/pages/help/use',
        }); break;
       case 4:
        wx.navigateTo({
          url: '/pages/rechanrge/bill',
        }); break;
       case 5:
        wx.navigateTo({
          url: '/pages/query/transit',
        }); break;
    }
  }, 
})
