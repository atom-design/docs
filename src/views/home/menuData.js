export default [{
  text: '介绍',
  routeName: 'home'
},
{
  text: '开发指南',
  isChild: true,
  childs: [{
    text: '安装',
    routeName: 'installation'
  },
  {
    text: '使用',
    routeName: 'usage'
  }]
},
{
  text: '支持 / 赞助',
  routeName: 'support'
},
{
  text: '组件',
  isChild: true,
  childs: [{
    text: 'Common',
    isChild: true,
    childs: [{
      text: 'Button',
      routeName: 'buttonDoc'
    },
    {
      text: 'Switch',
      routeName: 'switchDoc'
    },
    {
      text: 'Radio',
      routeName: 'radioDoc'
    },
    {
      text: 'Badge',
      routeName: 'badgeDoc'
    },
    {
      text: 'Loading',
      routeName: 'loadingDoc'
    },
    {
      text: 'Progress',
      routeName: 'progressDoc'
    }]
  },
  {
    text: 'Popup',
    isChild: true,
    childs: [{
      text: 'Toast',
      routeName: 'toastDoc'
    },
    {
      text: 'Dialog Box',
      routeName: 'dialogBoxDoc'
    },
    {
      text: 'Action Sheet',
      routeName: 'actionSheetDoc'
    },
    {
      text: 'Select Box',
      routeName: 'selectBoxDoc'
    },
    {
      text: 'Picker',
      routeName: 'pickerDoc'
    }]
  },
  {
    text: 'Data Input',
    isChild: true,
    childs: [{
      text: 'InputItem',
      routeName: 'inputItemDoc'
    },
    {
      text: 'Textarea',
      routeName: 'textareaDoc'
    },
    {
      text: 'SearchBar',
      routeName: 'searchBarDoc'
    }]
  },
  {
    text: 'Gesture',
    isChild: true,
    childs: [{
      text: 'Carousel',
      routeName: 'carouselDoc'
    },
    {
      text: 'SlideItem',
      routeName: 'slideItemDoc'
    },
    {
      text: 'PullGesture',
      routeName: 'pullGestureDoc'
    },
    {
      text: 'Range',
      routeName: 'rangeDoc'
    }]
  },
  {
    text: 'Navigation',
    isChild: true,
    childs: [{
      text: 'Header',
      routeName: 'headerDoc'
    },
    {
      text: 'Drawer',
      routeName: 'drawerDoc'
    },
    {
      text: 'Tabs',
      routeName: 'tabsDoc'
    }]
  },
  {
    text: 'JS Plugin',
    isChild: true,
    childs: [{
      text: 'Load More',
      routeName: 'loadMoreDoc'
    },
    {
      text: 'Lazy Load',
      routeName: 'lazyLoadDoc'
    }]
  }]
}]
