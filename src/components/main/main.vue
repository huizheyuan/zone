<template>
    <a-layout id="components-layout-demo-responsive">
        <a-layout-sider 
            :trigger="null" 
            v-model="collapsed" 
            collapsible 
            class="bgWhite center cancelScroll" 
            width="18vw"
        >
            <div class="logo">
                <div v-show="!collapsed">
                    <img :src="logo" key="max-logo" class="maxLogo" />
                    <span class="title">小费费</span>
                </div>
                <img v-show="collapsed" :src="logo" key="min-logo" class="minLogo" />
            </div>
            <side-menu></side-menu>
        </a-layout-sider>
        <a-layout :style="{height: '100vh'}">
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <header-bar :collapsed='collapsed' @on-change-collapse='changeCollapse'></header-bar>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ overflow: 'hidden', background: '#fff', minHeight: '85vh', borderRadius: '10px' }">
                    <router-view></router-view>
                </div>
            </a-layout-content>
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
    .maxLogo {
        width: 50px;
        height: 50px;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        margin: 0 10px;
    }
    .minLogo {
        width: 35px;
        height: 35px;
    }
}
</style>