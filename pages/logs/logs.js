//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        logs: [],
        array: [1, 2, 4, 5, 2],
        cameraSrc: ''
    },
    onLoad: function (query) {
        // this.setData({
        //     logs: (wx.getStorageSync('logs') || []).map(log => {
        //         return util.formatTime(new Date(log))
        //     })
        // })
    },
    onShareAppMessage: function (res) {
        console.log(res);
        wx.showShareMenu({
            withShareTicket: true
        })
        return {
            title: "周海燕",
            path: "/pages/index/index",
            withShareTicket: true
        }
    },
    another: {
        ha: "ahhah"
    },
    createCamera(){
        const ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
			success: (res) => {
				this.setData({
					cameraSrc: res.tempImagePath
				})
			}
        })
    }
})