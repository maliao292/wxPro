import { wxlogin } from '../../request/index'
Page({
    data: {},
    uf(e) {
        let {
            encryptedData,
            iv,
            rawData,
            signature
        } = e.detail
        console.log(e);

        wx.login({
            timeout: 10000,
            success: (result) => {
                let { code } = result
                let loginParams = {
                    encryptedData,
                    iv,
                    rawData,
                    signature,
                    code
                }
                wxlogin(loginParams).then(res => {
                    console.log(res);

                })
            }
        });

    }
})