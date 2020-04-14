export default [
    {
        path: 'frontEnd',
        name: 'FrontEnd',
        meta: {
            title: '前端',
            hideInMenu: false,
            notCache: true,
            icon: 'html5'
        },
        component: () => import('@/views/home/home.vue')
    },
    {
        path: 'java',
        name: 'Java',
        meta: {
            title: 'java',
            hideInMenu: false,
            notCache: true,
            icon: 'coffee'
        },
        component: () => import('@/views/home/home.vue')
    }
]
