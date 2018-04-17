import Vue from 'vue'
import Router from 'vue-router'
import Lpage from '@/components/Lpage'
import Spage from '@/components/Spage'
import Ipage from '@/components/Ipage'
import demo from '@/components/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: '測試',
      component: demo
    },
    {
      path: '/Lpage',
      name: '長期投資',
      component: Lpage
    },
    {
      path: '/Spage',
      name: '短期投資',
      component: Spage
    },
    {
      path: '/Ipage',
      name: '股市投資',
      component: Ipage
    }
  ]
})
