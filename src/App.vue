<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        provide () { // inject: ['reload', 'app'],
            return {
                reload: this.reload,
                app: this
            }
        },
        data() {
            return {
                isRouterAlive: true,
            };
        },
        methods: {
            reload () {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            },
        }
    };
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
