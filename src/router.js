import VueRouter from 'vue-router'
import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import CartContainer from './component/tabbar/CartContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'

const router = new VueRouter({
    routes:[
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/cart',
            component: CartContainer
        },
        {
            path: '/search',
            component: SearchContainer
        }
    ],
    linkActiveClass:'mui-active'
});

export default router;