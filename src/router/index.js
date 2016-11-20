import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Swipe = require('../views/Swipe')

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        component: Swipe
    }, {
      path: '/swipe',
      name: 'swipe',
      component: Swipe
    }]
})

router.beforeEach((to, from, next) => {
    router.app.$store.dispatch('hideHeaderNav')
    next()
})

export default router
