import { goodsList } from '../../request/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            name: '综合',
            isActive: true,
        }, {
            id: 1,
            name: '销量',
            isActive: false,
        }, {
            id: 2,
            name: '价格',
            isActive: false,
        }]
    },
    tabsItemChange(e) {
        console.log(e.detail.activeInd)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        goodsList(options).then(res => {
            console.log(res)
        })

    },
})