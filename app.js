//app.js
App({
    onLaunch: function (e) {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 打开分享获得分享信息
        console.log(e, e.shareTicket);
        wx.getShareInfo({
            shareTicket: e.shareTicket,
            success(res) {
                console.log(res);
            }
        })

        wx.checkSession({
            success(res) {
                // 当用户session_key失效时重新login
                if (!res.errMsg) {
                    // 登录
                    wx.login({
                        success: res => {
                            // 发送 res.code 到后台换取 openId, sessionKey, unionId
                            wx.request({
                                url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxdc028db00a2ea45d&secret=a9c78d7a4c60798a380a446e9e32300a&js_code=${res.code}&grant_type=authorization_code`,
                                success(res) {
                                    console.log(res);
                                }
                            })
                        }
                    })
                }
            }
        })

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo
                            console.log(res);

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    onShow(e) {


    },
    globalData: {
        userInfo: null,
        str: 'test'
    }
})