//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '点我进入',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小工具大世界',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
 
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gohistory: function (e){
    wx.showToast({
      title: '小猿正在开发中......',
      icon: 'loading',
      duration: 1000
    })
   // wx.navigateTo({
     // url: '../containt/calculator/history/history'
    //})
  },
  gocalculator: function (e) {
   wx.navigateTo({
      url: '../containt/calculator/calcul/testOne'
    })
  },
  goBodyMass: function (e) {
    wx.navigateTo({
      url: '../containt/bodyMass/bodyMass'
    })
  },
  goLove:function(){
    wx.navigateTo({
      url: '../containt/lovers/love'
    })
  },
  goConstellation:function(){
    wx.navigateTo({
      url: '../containt/constellation/constellation'
    })
  },
  
})
