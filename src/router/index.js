import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/guide'], resolve),
      children: [{
        path: '',
        name: 'guide',
        component: resolve => require(['@/views/guide/main.vue'], resolve),
        meta: {
          name: '引导页'
        }
      }]
    },
    {
      path: '/home',
      name: '',
      component: resolve => require(['@/views/home'], resolve),
      children: [{
        path: '',
        name: 'home',
        component: resolve => require(['@/views/introduce'], resolve),
        meta: {
          name: '首页'
        }
      },
      {
        path: 'installation',
        name: 'installation',
        component: resolve => require(['@/views/installation'], resolve),
        meta: {
          name: '安装'
        }
      },
      {
        path: 'usage',
        name: 'usage',
        component: resolve => require(['@/views/usage'], resolve),
        meta: {
          name: '使用'
        }
      },
      {
        path: 'support',
        name: 'support',
        component: resolve => require(['@/views/support'], resolve),
        meta: {
          name: '支持/赞助'
        }
      },
      {
        path: 'button',
        name: 'buttonDoc',
        component: resolve => require(['@/views/buttonDoc'], resolve),
        meta: {
          name: 'buttonDoc'
        }
      },
      {
        path: 'switch',
        name: 'switchDoc',
        component: resolve => require(['@/views/switchDoc'], resolve),
        meta: {
          name: 'switchDoc'
        }
      },
      {
        path: 'radio',
        name: 'radioDoc',
        component: resolve => require(['@/views/radioDoc'], resolve),
        meta: {
          name: 'radioDoc'
        }
      },
      {
        path: 'badge',
        name: 'badgeDoc',
        component: resolve => require(['@/views/badgeDoc'], resolve),
        meta: {
          name: 'badgeDoc'
        }
      },
      {
        path: 'loading',
        name: 'loadingDoc',
        component: resolve => require(['@/views/loadingDoc'], resolve),
        meta: {
          name: 'loadingDoc'
        }
      },
      {
        path: 'progress',
        name: 'progressDoc',
        component: resolve => require(['@/views/progressDoc'], resolve),
        meta: {
          name: 'progressDoc'
        }
      },
      {
        path: 'toast',
        name: 'toastDoc',
        component: resolve => require(['@/views/toastDoc'], resolve),
        meta: {
          name: 'toastDoc'
        }
      },
      {
        path: 'dialogBox',
        name: 'dialogBoxDoc',
        component: resolve => require(['@/views/dialogBoxDoc'], resolve),
        meta: {
          name: 'dialogBoxDoc'
        }
      },
      {
        path: 'actionSheet',
        name: 'actionSheetDoc',
        component: resolve => require(['@/views/actionSheetDoc'], resolve),
        meta: {
          name: 'actionSheetDoc'
        }
      },
      {
        path: 'selectBox',
        name: 'selectBoxDoc',
        component: resolve => require(['@/views/selectBoxDoc'], resolve),
        meta: {
          name: 'selectBoxDoc'
        }
      },
      {
        path: 'picker',
        name: 'pickerDoc',
        component: resolve => require(['@/views/pickerDoc'], resolve),
        meta: {
          name: 'pickerDoc'
        }
      },
      {
        path: 'inputItem',
        name: 'inputItemDoc',
        component: resolve => require(['@/views/inputItemDoc'], resolve),
        meta: {
          name: 'inputItemDoc'
        }
      },
      {
        path: 'textarea',
        name: 'textareaDoc',
        component: resolve => require(['@/views/textareaDoc'], resolve),
        meta: {
          name: 'textareaDoc'
        }
      },
      {
        path: 'searchBar',
        name: 'searchBarDoc',
        component: resolve => require(['@/views/searchBarDoc'], resolve),
        meta: {
          name: 'searchBarDoc'
        }
      },
      {
        path: 'carousel',
        name: 'carouselDoc',
        component: resolve => require(['@/views/carouselDoc'], resolve),
        meta: {
          name: 'carouselDoc'
        }
      },
      {
        path: 'slideItem',
        name: 'slideItemDoc',
        component: resolve => require(['@/views/slideItemDoc'], resolve),
        meta: {
          name: 'slideItemDoc'
        }
      },
      {
        path: 'pullGesture',
        name: 'pullGestureDoc',
        component: resolve => require(['@/views/pullGestureDoc'], resolve),
        meta: {
          name: 'pullGestureDoc'
        }
      },
      {
        path: 'range',
        name: 'rangeDoc',
        component: resolve => require(['@/views/rangeDoc'], resolve),
        meta: {
          name: 'rangeDoc'
        }
      },
      {
        path: 'header',
        name: 'headerDoc',
        component: resolve => require(['@/views/headerDoc'], resolve),
        meta: {
          name: 'headerDoc'
        }
      },
      {
        path: 'drawer',
        name: 'drawerDoc',
        component: resolve => require(['@/views/drawerDoc'], resolve),
        meta: {
          name: 'drawerDoc'
        }
      },
      {
        path: 'tabs',
        name: 'tabsDoc',
        component: resolve => require(['@/views/tabsDoc'], resolve),
        meta: {
          name: 'tabsDoc'
        }
      },
      {
        path: 'loadMore',
        name: 'loadMoreDoc',
        component: resolve => require(['@/views/loadMoreDoc'], resolve),
        meta: {
          name: 'loadMoreDoc'
        }
      },
      {
        path: 'lazyLoad',
        name: 'lazyLoadDoc',
        component: resolve => require(['@/views/lazyLoadDoc'], resolve),
        meta: {
          name: 'lazyLoadDoc'
        }
      }]
    }
  ]
})
