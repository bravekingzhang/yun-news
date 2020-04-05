//index.js
const app = getApp()

Page({
  data: {
    news:[]
  },
  getNews:function(){
    wx.cloud.callFunction({
      name: 'news',
      data: {
        hot_type:'views',//hot_type 可接受参数 views（浏览数） | likes（点赞数） | comments（评论数）
        category:'Article',//category 可接受参数 Article | GanHuo | Girl
        count:20
      },
      success: res => {
        console.log('[云函数] [news] 调用')
        console.log(res)
        this.setData({
          news:res.result.data
        })
      },
      fail: err => {
        console.error('[云函数] [news] 调用失败', err)
      }
    })
  },
})
