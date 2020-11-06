let defaultUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
const request = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const homeSwiper = () =>  request({url:defaultUrl+'/home/swiperdata'})
export const homeCatitems = () =>  request({url:defaultUrl+'/home/catitems'})
export const homeFloors = () =>  request({url:defaultUrl+'/home/floordata'})
