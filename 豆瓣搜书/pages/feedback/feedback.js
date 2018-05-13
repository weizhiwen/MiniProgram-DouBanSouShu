// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 255, // 最大字数
    noteNowLen: 0, // 当前字数
    name: '',
    feedback: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '页面加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
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

  // 事件处理函数
  formSubmit: function(e) {
    var that = this;
    var name = e.detail.value.name;
    var feedback = e.detail.value.feedback;
    if (name == '' || name.length == 0) {
      wx.showModal({
        content: '先给自己取个响亮的名字吧(∩_∩)',
        showCancel: false
      })
    } else if (name.trim().length == 0) {
      wx.showModal({
        content: '名字不能只为空格哦(∩_∩)',
        showCancel: false
      })
    } else if (feedback == '' || feedback.length == 0){
      wx.showModal({
        content: '给开发者一些建议或者反馈吧(∩_∩)',
        showCancel: false
      })
    } else if (feedback.trim().length == 0){
      wx.showModal({
        content: '反馈和建议只输入空格，你是在逗开发者吗(* ￣︿￣)',
        showCancel: false
      })
    } else {
      wx.showLoading({
        title: '提交中...',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 100)
      wx.request({
        url: 'https://wenshixin.cc/dbss/api/feedback.php?m=insert',
        data: {
          name: name,
          feedback: feedback
        },
        success: function (res) {
          var info = res.data.info;
          if(info == 'success') {
            wx.showToast({
              title: '我会更加努力！',
              icon: 'success',
              duration: 2000
            })
          }
          // 清空填写的值
          that.setData({
            name: '',
            feedback: ''
          })
        },
        fail: function() {
          wx.showToast({
            title: '正在抢修服务器!',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },

  //字数改变触发事件
  bindTextAreaChange: function (e) {
    var that = this;
    var value = e.detail.value;
    var len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({
      noteNowLen: len
    })
  }

})