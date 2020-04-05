// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()

async function getNews(category,hot_type,count) {
  console.log('start getNews')
  let data = {}
  try {
    const url = `https://gank.io/api/v2/hot/${hot_type}/category/${category}/count/${count}`
    console.log(url)
    var res = await axios.get(url)
    data = res.data.data
  } catch (err) {
    console.log(err)
  }
  return data
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const data =  await getNews(event.category,event.hot_type,event.count)
  console.log(data)
  return {
    event,
    data:data
  }
}