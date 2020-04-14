<template>
    <div class="header-bar">
        <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="changeCollapsed"
            style="fontSize: 20px"
            class="trigger"
        />
        <a-breadcrumb style="display: inline-block; line-height: 64px; padding: 0 20px">
            <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.name">
                <a-icon :type="item.meta.icon || ''" />
                <span>{{item.meta.title}}</span>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    props: {
        collapsed: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            breadcrumbs: this.$router.currentRoute.matched || []
        }
    },
    methods: {
        changeCollapsed() {
            this.$emit('on-change-collapse')
        }
    },
    watch: {
        '$route' (newRoute) {
            if (newRoute.name === 'Home') {
                newRoute.matched.shift()
            }
            this.breadcrumbs = newRoute.matched
        }
    }
}
</script>

<style lang="less" scoped>
.header-bar {
    padding: 0 20px;
}
</style>