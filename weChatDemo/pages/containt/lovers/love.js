Page({

  /**
   * 页面的初始数据
   */
  data: {
    days:0,
    value1:'',
    value2:'',
    value3:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '情侣对对碰'
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
  ,
  bindKeyInput: function (e) {
    if (isNaN(e.detail.value)) {
      wx.showToast({
        title: '输入正确数字',
        icon: 'loading',
        duration: 1000
      })
    
      return
    }
   
    // console.log(e)
    if (e.target.id == 'input1') {
      this.data.value1 = e.detail.value;
    }
    if (e.target.id == 'input2') {
    
        this.data.value2 = e.detail.value;
     }
    if (e.target.id == 'input3') {
    
        this.data.value3 = e.detail.value;
     }

    
  },
  culator:function(){
   
    if (this.data.value2<=0 || this.data.value2 >=13) {
      wx.showToast({
        title: '月份1-12数字',
        icon: 'loading',
        duration: 1000
      })
    }
    if ( this.data.value3<=0 || this.data.value3 >=32) {
      wx.showToast({
        title: '天数1-31数字',
        icon: 'loading',
        duration: 1000
      })
    }

    if (!this.data.value1 || !this.data.value2 || !this.data.value3){
      wx.showToast({
        title: '请输入数字',
        icon: 'loading',
        duration: 1000
      })
    }
    var newTime = Date.parse(new Date());
    var oldtime = this.data.value1 + '-' + this.data.value2 + '-' + this.data.value3;
   
    
    if (new Date(oldtime).getDate() == oldtime.substring(oldtime.length - 2)){
      oldtime = Date.parse(oldtime)
      var days = parseInt((newTime - oldtime) / (1000 * 60 * 60 * 24));

      this.setData({ days: days})
     
    }else{
      wx.showToast({
        title: '请输入正确日期',
        icon: 'loading',
        duration: 1000
      })
    }


   
  }
})