// pages/cart/index.js
Page({
    data: {


    },
    // 获取收货地址
    handlechooseAddress() {
        wx.chooseAddress({
            success: (result) => {
                console.log(result);
                wx.setStorageSync('addresss', result);
            },
        });

    },

})