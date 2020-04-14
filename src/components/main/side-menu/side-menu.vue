<template>
    <a-menu
        :selectedKeys="[current]"
        :defaultOpenKeys="[openKeys]"
        @click="handleClick"
        mode="inline" >
        <template v-for="item in menuList">
            <a-menu-item v-if="!item.meta" :key="item.name">
                <a-icon :type="item.children[0].meta.icon || ''" />
                <span>{{ item.children[0].meta.title }}</span>
            </a-menu-item>
            <a-sub-menu v-else :key="item.name">
                <template slot="title">
                    <a-icon :type="item.meta.icon || ''" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <template v-for="item in item.children">
                    <a-menu-item v-if="!item.children" :key="item.name">
                        <a-icon :type="item.meta.icon || ''" />
                        <span>{{ item.meta.title }}</span>
                    </a-menu-item>
                    <sub-menu v-else :key="item.name" :menu-info="item" />
                </template>
            </a-sub-menu>
        </template>
    </a-menu>
</template>

<script>
import routers from '@/router/routers'
export default {
    name: 'SideMenu',
    data() {
        return {
            menuList: routers,
            current: this.$router.currentRoute.name!=='Home' ? this.$router.currentRoute.name : '_Home',
            openKeys: this.$router.currentRoute.matched[0].name || '',
        };
    },
    methods: {
        handleClick(e) {
            this.current = e.key;
            this.$router.push({ name: e.key })
        },
    },
};
</script>

<style lang="less">
</style>
