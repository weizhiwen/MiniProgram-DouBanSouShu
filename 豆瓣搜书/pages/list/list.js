// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    q: '',
    count: 10,
    start: 0,
    total: 0,
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
      title: '页面君正在努力渲染中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    var q = options.q;
    var start = that.data.start;
    // console.log('要搜索的书籍为：', q);
    if(q != null && q != '') {
        wx.request({
        url: 'https://wenshixin.cc/dbss/api/book.php?m=searchAll',
        data: {
          q: q,
          count: 10,
          start: start
        },
        success: function (res) {
          var count = res.data.count;
          var start = res.data.start;
          var total = res.data.total;
          var books = res.data.books;
          console.log('count', count, 'start', start, 'total', total);
          that.setData({
            q: q,
            count: count,
            start: start,
            total: total,
            books: books
          })
        }
      })
    } else{
      console.log('没有找到相关书籍');
    }
  },

  // 事件处理函数
  prePage: function () {
    var that = this;
    wx.showLoading({
      title: '页面君正在努力渲染中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var q = that.data.q;
    var start = that.data.start - that.data.count;
    if (q != null && q != '') {
      wx.request({
        url: 'https://wenshixin.cc/dbss/book.php?m=searchAll',
        data: {
          q: q,
          count: 10,
          start: start
        },
        success: function (res) {
          var count = res.data.count;
          var start = res.data.start;
          var total = res.data.total;
          var books = res.data.books;
          console.log('count', count, 'start', start, 'total', total);
          that.setData({
            count: count,
            start: start,
            total: total,
            books: books
          })
        }
      })
    } else {
      console.log('没有找到相关书籍');
    }
  },

  nextPage: function () {
    var that = this;
    wx.showLoading({
      title: '页面君正在努力渲染中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var q = that.data.q;
    var start = that.data.start + that.data.count;
    if (q != null && q != '') {
      wx.request({
        url: 'https://wenshixin.cc/dbss/book.php?m=searchAll',
        data: {
          q: q,
          count: 10,
          start: start
        },
        success: function (res) {
          var count = res.data.count;
          var start = res.data.start;
          var total = res.data.total;
          var books = res.data.books;
          console.log('count', count, 'start', start, 'total', total);
          that.setData({
            count: count,
            start: start,
            total: total,
            books: books
          })
        }
      })
    } else {
      console.log('没有找到相关书籍');
    }
  },

  toDetail: function (event) {
    var that = this;
    wx.showLoading({
      title: '页面君正在努力渲染中...',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    var id = event.currentTarget.dataset.id;
    var book = that.data.books[id];
    book = JSON.stringify(book);
    wx.navigateTo({
      url: '../detail/detail?book=' + book,
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
})