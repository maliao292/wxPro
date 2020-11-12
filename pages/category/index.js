// pages/category/index.js
import { categoryData } from '../../request/index'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        listArr: [],
        activeMenu: 0,
        toView: 'autoId_0',
        scrp: 0,
        scrollTopArr: [] // 滚动数据存储
    },
    choseClass(e) {

        let activeMenu = e.currentTarget.dataset.ind
        this.setData({ activeMenu })
        let query = wx.createSelectorQuery().in(this);
        this.data.listArr.forEach((res, ind) => {
            var toViewid = "#autoId_" + ind; //获取id

            query.select(toViewid).boundingClientRect();

        })

        query.exec((res) => {
            console.log(res)
            let arr = []
            let sum = res.reduce((prev, cur, index, array) => {
                arr.push(prev)
                return prev + cur.height
            }, 0)
            arr.push(sum)
            this.setData({ scrollTopArr: arr })

            console.log(this.data.scrollTopArr)
            this.setData({ scrp: this.data.scrollTopArr[activeMenu] })
        });






        // 

        // let query = wx.createSelectorQuery().in(this);
        // query.selectViewport().scrollOffset()
        // query.select(toViewid).boundingClientRect();
        // // query.select("#FilterNav").boundingClientRect();
        // // query.select("#" + ((letter == '#') ? 'other' : letter)).boundingClientRect();
        // let _this = this
        // query.exec(function(res) {
        //     console.log(res[1].top)

        //     _this.setData({ scrp: res[1].top })
        //         // wx.pageScrollTo({
        //         //     scrollTop: res[1].top,
        //         //     duration: 0
        //         // });
        // });


    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        categoryData().then(res => {
            this.setData({
                listArr: res.message
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})