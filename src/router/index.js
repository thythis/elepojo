import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: 'test',
          component: Test
        }
      ]
    },
    // {
    //   path:'/test',
    //   component: Test
    // }
  ]
})
