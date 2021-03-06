Page({

  /**
   * 页面的初始数据
   */
  data: {
    idb: "back",
    idc: "clear",
    idt: "toggle",
    idadd: "＋",
    id9: "9",
    id8: "8",
    id7: "7",
    idj: "－",
    id6: "6",
    id5: "5",
    id4: "4",
    idx: "×",
    id3: "3",
    id2: "2",
    id1: "1",
    iddiv: "÷",
    id0: "0",
    idd: ".",
    ide: "＝",
    screenData: "0",
    operaSymbo: { "＋": "+", "－": "-", "×": "*", "÷": "/", ".": "." },
    lastIsOperaSymbo: false,
    iconType: 'waiting_circle',
    iconColor: 'white',
    arr: [],
    logs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '计算器'
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
  clickBtn: function (event) {
    var id = event.target.id;
    if (id == this.data.idb)       //退格
    {
     var data = this.data.screenData;
       if(data=="0") return;
      console.log(data)
     var newData = data.substring(0, data.length - 1);
    if (newData == "" || newData == "-") newData = 0;
     this.setData({ "screenData": newData });
    } else if (id == this.data.idc)    //清屏
    {
      this.setData({ "screenData": "0" });
      this.data.arr.length = 0;
    } else if (id == this.data.ide)      //等于=
    {
      var data = this.data.screenData;
      if (data == "0") return;

      //eval是js中window的一个方法，而微信页面的脚本逻辑在是在JsCore中运行，JsCore是一个没有窗口对象的环境，所以不能在脚本中使用window，也无法在脚本中操作组件                 
      //var result = eval(newData);  

      //计算结果
      var lastWord = data.charAt(data.length);
      if (isNaN(lastWord)) return;

      var num = "";
      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for (var i in arr) {
        if (isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt) {
          num += arr[i];
        } else {
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0]) * 1.0;
      console.log(result);
      for (var i = 1; i < optarr.length; i++) {
        if (isNaN(optarr[i])) {
          if (optarr[1] == this.data.idadd)       //加
          {
            result += Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idj)    //减
          {
            result -= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idx)    //乘
          {
            result *= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.iddiv)  //除
          {
            result /= Number(optarr[i + 1]);
          }
        }
      }


      //存储历史记录
      this.data.logs.push(data + '=' + result);
      wx.setStorageSync("calclogs", this.data.logs);

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({ "screenData": result + "" });
    } else                               //点击数字和符号键
    {
      if (this.data.operaSymbo[id]) {
        if (this.data.lastIsOperaSymbo || this.data.screenData == "0") return;
      }

      var sd = this.data.screenData;
      var data;
      if (sd == 0) {
        data = id;
      } else {
        data = sd + id;
      }
      this.setData({ "screenData": data });
      this.data.arr.push(id);

      if (this.data.operaSymbo[id])         //点击的是开关的话，设置开关，让符号不能重复点击
      {
        this.setData({ "lastIsOperaSymbo": true });
      } else {
        this.setData({ "lastIsOperaSymbo": false });
      }
     
    }
  },
  history: function () {
    wx.navigateTo({
      url: '../history/history'
    })
  }

  
})