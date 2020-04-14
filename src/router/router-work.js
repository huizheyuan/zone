export default [
    {
        path: 'baizhu',
        name: 'baizhu',
        meta: {
            title: '百助',
            hideInMenu: false,
            notCache: true,
            icon: 'rise'
        },
        component: () => import('@/views/work/baizhu/baizhu.vue')
    },
    {
        path: 'university',
        name: 'university',
        meta: {
            title: '学校',
            hideInMenu: false,
            notCache: true,
            icon: 'bell'
        },
        component: () => import('@/views/work/university/university.vue')
    },
]
