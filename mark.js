// 标签
  // text view button checkbox image swiper swiper-item navigator button icon radio
    // image 存在默认 宽高 320*240
      // mode

    // swiper swiper-item 
    // navigator
      




// 标签属性
  // wx:if wx:elif wx:else
  // hidden  隐藏
// 事件绑定
  // bindinput bindtab
  // <view bindtab='fun' data-operation="{{1}}">
    //  data-operation 给函数传参
// 赋值
  //this.setData({})


  // WSS 样式
    // rpx: 所有屏幕宽度 都为 750rpx 
    // 不！支持 * （通配符）
    // 样式导入
      // @import '相对路径'；
      
    // LESS
      //  首先在Vscode中惜哉easy less 插件
      //  然后再设置中搜索setting.json,在json文件中添加如下代码
      //  "less.compile": { "outExt": ".wxss" },


// 组件
  // 在page json 文件 usingComponents：{"Tabs":"../../components/Tabs/Tabs"} 引入 
  // 向父组件传值 this.triggerEvent('父组件fun'，参数)
  

// 路由
// https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html

// Tips:

// navigateTo, redirectTo 只能打开非 tabBar 页面。
// switchTab 只能打开 tabBar 页面。
// reLaunch 可以打开任意页面。
// 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
// 调用页面路由带的参数可以在目标页面的onLoad中获取。
      