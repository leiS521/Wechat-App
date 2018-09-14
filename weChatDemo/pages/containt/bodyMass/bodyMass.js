Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue1: '',
    inputValue2: '',
    calcullValue:'',//体重指数
    weightValue:'',//体重参考范围
    optimumWeight:'',//最佳体重
    optimumSurround: '',//最佳上围
    optimumWaist: '',//最佳腰围
    optimumAbdominal: '',//最佳腹围
    optimumHipline: '',//最佳臀围
    optimumThigh: '',//最佳腿围


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '体重指数计算器'
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
  bindKeyInput: function (e) {
   // console.log(e)
    if(e.target.id=='input1'){
      this.data.inputValue1 = e.detail.value;
    }
    if (e.target.id == 'input2') {
      this.data.inputValue2    = e.detail.value;
    }
    
   console.log(e.detail.value)
  },
  bodyMassCulator:function(e){
    if (!this.data.inputValue1 || !this.data.inputValue2){
      wx.showToast({
        title: '请输入数值',
        icon: 'loading',
        duration: 1000
      })
      this.setData({ calcullValue: '' })
      return
    }
    var newValue = this.data.inputValue1 / this.data.inputValue2 / this.data.inputValue2*10000;//体重指数
    var weightValue1 = this.data.inputValue2 * this.data.inputValue2*18.5/10000;
    var weightValue2 = this.data.inputValue2 * this.data.inputValue2 * 22.9 / 10000;
    var weightValue = weightValue1.toFixed(2) + '~' + weightValue2.toFixed(2);//体重参考范围
    var optimumWeight = (this.data.inputValue2 - 100) * 0.9 ;//最佳体重
       var optimumWeights = optimumWeight.toFixed(2);
      
       var optimumWeightss = (optimumWeight-2.5).toFixed(2)
       console.log(optimumWeights, optimumWeightss)
        optimumWeight = optimumWeights + '(男)' +'-'+ optimumWeightss+'(女)'
     var optimumSurround = (this.data.inputValue2 * 0.515).toFixed(2);//最佳上围
        
     var optimumWaist = (this.data.inputValue2 * 0.37).toFixed(2);//最佳腰围
       
     var optimumAbdominal = (this.data.inputValue2 * 0.457).toFixed(2);//最佳腹围
    
    var optimumHipline = (this.data.inputValue2 * 0.542).toFixed(2);//最佳臀围
      
    var  bigoptimumThigh = (this.data.inputValue2 * 0.26 + 7.8).toFixed(2);//最佳腿围
    var smallThigh = (this.data.inputValue2 * 0.18 ).toFixed(2);//最佳小腿腿围
    var optimumThigh = bigoptimumThigh + '(大腿)' + '-'+smallThigh+'(小腿)'

    if (isNaN(newValue)) { 
      wx.showToast({
        title: '输入正确数字',
        icon: 'loading',
        duration: 1000
      })
      this.setData({ calcullValue: '' })
      return
    }
    newValue =newValue.toFixed(2);
     var mark=''
    if (newValue<=18.5){
        mark ='您体重偏轻'
    }
    if (18.5 < newValue && newValue <= 22.9) {
      mark = '您体重正常'
    }
    if (23 < newValue && newValue <= 26.9) {
      mark = '您体重超重'
    }
    if (27 < newValue && newValue <= 29.9) {
      mark = '您轻度肥胖'
    }
    if (30 < newValue && newValue <= 35) {
      mark = '您中度肥胖'
    }
    if ( 35<newValue ) {
      mark = '您重度肥胖'
    }


    this.setData({ calcullValue: newValue + '  ' + mark,
      weightValue: weightValue,
       optimumWeight: optimumWeight,
      optimumSurround: optimumSurround, 
      optimumWaist: optimumWaist,
       optimumAbdominal: optimumAbdominal,
       optimumHipline: optimumHipline, 
      optimumThigh: optimumThigh
      })
    console.log(this.data.inputValue1, this.data.inputValue2, newValue, weightValue1)
  }
})