// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  //事件处理函数
  formSubmit: function (e) {
    var bookname = e.detail.value.bookname;
    if(bookname == '' || bookname.length == 0) {
      wx.showModal({
        content: '伦家不知道你要搜什么书啦(┬＿┬)',
        showCancel: false
      })
    } else if (bookname.trim().length == 0) {
      wx.showModal({
        content: '不能只输入空格哦(┬＿┬)',
        showCancel: false
      })
    } else {
      wx.showLoading({
        title: '正在搜索中···',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
      if (bookname != '' && bookname != null) {
        // 转到列表页面展示结果
        wx.navigateTo({
          url: '../list/list?q=' + bookname
        })
      }
    }
  },
  onShareAppMessage: function () {
    return {
      title: '豆瓣搜书',
      desc: '简单易用的搜书小程序!',
      path: 'pages/index/index'
    }
  }
})