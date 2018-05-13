// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book: {},
    hasBookIntroduce: false,
    hasAuthorIntroduce: false,
    hasCatalog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('onLoad方法');
    var that = this;
    var book = JSON.parse(options.book);
    that.setData({
      book: book,
      hasBookIntroduce: book.summary.replace(/[\n\t\s]/g, '') ? true : false,
      hasAuthorIntroduce: book.author_intro.replace(/[\n\t\s]/g, '') ? true : false,
      hasCatalog: book.catalog.replace(/[\n\t\s]/g, '') ? true : false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady方法');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow方法');
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