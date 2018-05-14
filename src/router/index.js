import Vue from 'vue'
import Router from 'vue-router'
import Lpage from '@/components/Lpage'
import Spage from '@/components/Spage'
import Ipage from '@/components/Ipage'
import demo from '@/components/demo'
import demo01 from '@/components/demo01'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/demo1',
      name: '測試',
      component: demo1
    },
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
