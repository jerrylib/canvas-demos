import { router } from '@gem-mine/durex-router'
import { asyncLoader } from '../util/loader'

// 页面组件
import NotFound from '../component/status/404'
import Forbidden from '../component/status/403'
import Loading from '../component/status/Loading'

/**
 * 路由配置，包括：
 *   默认组件配置，例如404，403, loading
 */
router.config({
  components: {
    NotFound,
    Forbidden,
    Loading
  }
})

/**
 * 路由注册
 * path: 必须 {string}，路径
 * component: 可选 {Component}，路由对应的渲染组件
 * permission: 可选 {function}，权限验证函数，无表示不需要权限验证，子路由、平级子模块会继承权限
 * sub: 可选 {array} 子路由
 * index: 可选 {boolean} 是否作为父路由的默认显示
 * module: 可选 {array} 平级子模块
 * redirect: 可选 {string} 跳转到某个路由，不能与 sub 共存
 * exact: 可选 {boolean}是否完全匹配
 */
router.register({
  page: {
    path: '/',
    index: true,
    component: asyncLoader('page/index'),
    sub: {
      main: {
        path: '/main',
        index: true,
        component: asyncLoader('page/main')
      },
      aboutus: {
        path: '/aboutus',
        component: asyncLoader('page/aboutus'),
        sub: {
          detail: {
            index: true,
            path: '/company-detail',
            component: asyncLoader('page/aboutus/company-detail')
          },
          line: {
            path: '/company-line',
            component: asyncLoader('page/aboutus/company-line')
          }
        }
      },
      news: {
        path: '/news',
        component: asyncLoader('page/news'),
        sub: {
          list: {
            index: true,
            path: '/news-list',
            component: asyncLoader('page/news/list')
          },
          detail: {
            path: '/news-detail/:id',
            component: asyncLoader('page/news/detail')
          }
        }
      },
      products: {
        path: '/products',
        component: asyncLoader('page/products')
      },
      hr: {
        path: '/hr',
        component: asyncLoader('page/hr')
      },
      contact: {
        path: '/contact',
        component: asyncLoader('page/contact')
      }
    }
  }

})
