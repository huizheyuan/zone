<template>
    <a-layout id="components-layout-demo-responsive" style="height: 100vh">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="bgWhite center" width="18vw">
            <div class="logo">
                <div v-show="!collapsed">
                    <img :src="logo" key="max-logo" />
                    <span class="title">小费费</span>
                </div>
                <img v-show="collapsed" :src="logo" key="min-logo" />
            </div>
            <side-menu></side-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <header-bar :collapsed='collapsed' @on-change-collapse='changeCollapse'></header-bar>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh' }">
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <a-layout-footer class="center">
                workpace ©2020 Created by Jennifer
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
import SideMenu from './side-menu/side-menu'
import HeaderBar from './header-bar/header-bar'
import logo from '@/assets/images/logo.png'
export default {
    name: 'Main',
    components: { SideMenu, HeaderBar },
    data() {
        return {
            logo,
            collapsed: false,
        }
    },
    methods: {
        changeCollapse() {
            this.collapsed = !this.collapsed
        }
    }
}
</script>

<style lang="less" scoped>
.logo {
    padding: 10px;
    img {
        width: 50px;
        height: 50px;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 10px;
    }
}
</style>