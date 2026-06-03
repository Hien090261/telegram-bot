export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/rewards/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFD700',
    navigationBarTitleText: 'Gom Xu Mini App',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#86909c',
    selectedColor: '#DAA520',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'Trang chủ'
      },
      {
        pagePath: 'pages/rewards/index',
        text: 'Phần thưởng'
      },
      {
        pagePath: 'pages/mine/index',
        text: 'Cá nhân'
      }
    ]
  }
})
