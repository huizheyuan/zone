import Main from '@/components/main/main'
import workRouters from './router-work'
import codeRouters from './router-code'

const routes = [
    {
        path: '/',
        name: '_Home',
        redirect: '/home',
        component: Main,
        children: [{
            path: '/home',
            name: 'Home',
            meta: {
                hideInMenu: false,
                title: '个人主页',
                notCache: true,
                icon: 'pie-chart'
            },
            component: () => import('@/views/home/home.vue')
        }]
    },
    {
        path: '/work',
        name: 'Work',
        meta: {
            title: '工作汇报',
            hideInMenu: false,
            notCache: true,
            icon: 'appstore'
        },
        component: Main,
        children: workRouters
    },
    {
        path: '/code',
        name: 'Code',
        meta: {
            title: '程序圆',
            hideInMenu: false,
            notCache: true,
            icon: 'bug'
        },
        component: Main,
        children: codeRouters
    }
]

export default routes