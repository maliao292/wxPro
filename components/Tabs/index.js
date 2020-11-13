// components/Tabs/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        activeInd: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changetab(e) {
            let activeInd = e.target.dataset.id
            this.setData({activeInd})
            this.triggerEvent('tabsItemChange',{activeInd})
        }
    }
})