let defaultUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
let requestNum = 0
const request = (params) => {
    requestNum++
    wx.showLoading({
        title: '加载中',
    })
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            },
            complete() {
                requestNum--

                if (requestNum <= 0) {
                    wx.hideLoading()
                }
            }
        })
    })
}
export const homeSwiper = () => request({
    url: defaultUrl + '/home/swiperdata'
})
export const homeCatitems = () => request({
    url: defaultUrl + '/home/catitems'
})
export const homeFloors = () => request({
    url: defaultUrl + '/home/floordata'
})

// 分类
export const categoryData = () => request({
        url: defaultUrl + '/categories'
    })
    // 商品列表搜索
export const goodsList = params => request({
    url: defaultUrl + '/goods/search',
    data: params
})

// 商品详情
export const goodsDetails = params => request({
    url: defaultUrl + '/goods/detail',
    data: params
})

// 登录 
export const wxlogin = params => request({
    url: defaultUrl + '/users/wxlogin',
    data: params,
    method: 'POST'
})