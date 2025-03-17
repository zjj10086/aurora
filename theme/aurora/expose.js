var ExposeConfig = {
  extraMenus: [
    {
      groupTitle: 'Telegram', // 大标题文本 （如需支持多语言，请在zh-CN.js、zh-TW.js、en-US.js中配置多语言文本）
      groupLinks: [
        {
          menuTitle: 'TG通知频道', // 标题文本
          menuIcon: 'bell-ringing', // 图标：https://phosphoricons.com/ 自选
          menuPath: 'https://t.me/xheiy', // 链接地址
          needSubscribe: false, // true：需要订阅后才能查看 false：无需订阅即可查看
          isExternal: true // true：打开新窗口 false：内嵌
        },
        {
          menuTitle: 'TG群组', // 标题文本
          menuIcon: 'telegram-logo', // 图标：https://phosphoricons.com/ 自选
          menuPath: 'https://t.me/lubiantany', // 链接地址
          needSubscribe: true, // true：需要订阅后才能查看 false：无需订阅即可查看
          isExternal: true // true：打开新窗口 false：内嵌
        },
        {
          menuTitle: 'TG客服', // 标题文本
          menuIcon: 'robot', // 图标：https://phosphoricons.com/ 自选
          menuPath: 'https://t.me/yutuyy_bot', // 链接地址
          needSubscribe: true, // true：需要订阅后才能查看 false：无需订阅即可查看
          isExternal: true // true：打开新窗口 false：内嵌
        }
      ]
    }
  ]
}
