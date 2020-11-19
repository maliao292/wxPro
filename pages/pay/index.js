// pages/cart/index.js
Page({
    data: {
        addresssObj: {
            errMsg: '',
            userName: null,
            nationalCode: null,
            telNumber: null,
            postalCode: null,
            provinceName: null,
            cityName: null,
            countyName: null,
            detailInfo: null,
        },
        cart: [],
        cheackAll: false,
        totalPrice: 0,
        totalNmu: 0
    },
    handelOrderPay() {
        let token = wx.getStorageSync('token')
        if (!token) {
            wx.navigateTo({
                url: '/pages/auth/index',
            });
            return
        }
        console.log('存在存在');

    },
    addNum(e) {
        let obj = e.currentTarget.dataset
        console.log(1 + Number(obj.num), obj);
        if (this.data.cart[obj.ind]['num'] == 1 && obj.num == -1) {
            wx.showModal({
                title: '提示',
                content: '是否删除该商品',
                success: res => {
                    if (res.confirm) {
                        this.data.cart.splice(obj.ind, 1)
                        this.setShoppingCart(this.data.cart)

                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        } else {
            this.data.cart[obj.ind]['num'] += Number(obj.num)
            this.setShoppingCart(this.data.cart)

        }



    },
    prochange(e) {
        let { ind } = e.currentTarget.dataset

        this.data.cart[ind]['checked'] = !this.data.cart[ind]['checked']
        this.setShoppingCart(this.data.cart)
    },
    checkAll() {
        this.setData({
            cheackAll: !this.data.cheackAll
        })
        this.data.cart.forEach(res => {
            res.checked = this.data.cheackAll
        })
        this.setShoppingCart(this.data.cart)
    },
    // 获取收货地址
    handlechooseAddress() {
        wx.chooseAddress({
            success: (result) => {
                wx.setStorageSync('addresss', result);
                this.setData({
                    addresssObj: wx.getStorageSync('addresss')
                })
            },
        });

    },
    setShoppingCart(cart) {
        let num = 0
        let price = 0
        let cheackAll = true
        cart.forEach(item => {
            if (item.checked) {
                num += item.num
                price += item.num * item.goods_price

            } else {
                cheackAll = false
            }

        });
        wx.setStorageSync('shoppingCart', cart)
        this.setData({
            cart,
            cheackAll: cart.length !== 0 ? cheackAll : false,
            totalPrice: price,
            totalNmu: num
        })
    },
    onShow(option) {
        this.setData({
            addresssObj: wx.getStorageSync('addresss')
        })
        this.setData({
            cart: wx.getStorageSync('shoppingCart') || []
        })
        this.setShoppingCart(this.data.cart)
    }

})