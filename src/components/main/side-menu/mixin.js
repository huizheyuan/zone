import routers from '@/router/routers'
export default {
    data() {
        return {
            menuList: routers,
            current: '_Home',
            openKeys: ['Code'],
        };
    },
    methods: {
        handleClick(e) {
            this.current = e.key;
            this.$router.push({ name: e.key })
        },
        onOpenChange(openKeys) {
            let rootSubmenuKeys =[]
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
            this.menuList.map(item=>rootSubmenuKeys.push(item.name))
            if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys;
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
    }
}
