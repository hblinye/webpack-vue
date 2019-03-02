import RouterHome from './components/RouterHome.vue';
import FirstChild from './components/homeChildren/FirstChild.vue';
import SecondChild from './components/homeChildren/SecondChild.vue';

const routers = [
    {
        path: '/',
        component: RouterHome,
        children: [
            {
                path: '/',
                component: FirstChild
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: RouterHome,
        children: [
            {
                path: '/',
                name: 'first',
                component: FirstChild
            },
            {
                path: 'second',
                name: 'second',
                component: SecondChild
            }
        ]
    }
]
export default routers
