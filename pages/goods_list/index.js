import {
    goodsList
} from '../../request/index'
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
        }],
        proList: [],

    },
    searchData: {
        cid: null,
        pagenum: 1,
        pagesize: 10
    },
    isEnd: false,
    tabsItemChange(e) {
        console.log(e.detail.activeInd)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.searchData.cid = options.cid
        goodsList(this.searchData).then(res => {
            this.setData({
                proList: res.message.goods
            })
        })

    },
    onReachBottom: function (e) {
        if (!this.isEnd) {
            this.searchData.pagenum++
            goodsList(this.searchData).then(res => {
                this.setData({
                    proList: [...this.data.proList, ...res.message.goods]
                })
                let maxPage = Math.ceil(res.message.total / this.searchData.pagesize)
                if (maxPage <= Number(res.message.pagenum)) {
                    this.isEnd = true

                }

            })
        }

    }
})