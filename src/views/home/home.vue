<template>
    <div class="home">
        <Header></Header>
        <section class="content">
            <a-transfer
                :dataSource="mockData"
                :targetKeys="targetKeys"
                @change="onChange"
                :filterOption="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
                :leftColumns="leftColumns"
                :rightColumns="rightColumns"
                :showSelectAll="false"
            >
                <template
                    slot="children"
                    slot-scope="{
                        props: { direction, filteredItems, selectedKeys, disabled: listDisabled },
                        on: { itemSelectAll, itemSelect },
                    }"
                >
                    <a-table
                        :rowSelection="
                            getRowSelection({ disabled: listDisabled, selectedKeys, itemSelectAll, itemSelect })
                        "
                        :columns="direction === 'left' ? leftColumns : rightColumns"
                        :dataSource="filteredItems"
                        size="small"
                        :style="{ pointerEvents: listDisabled ? 'none' : null }"
                        :customRow="
                        ({ key, disabled: itemDisabled }) => ({
                            on: {
                                click: () => {
                                    if (itemDisabled || listDisabled) return;
                                    itemSelect(key, !selectedKeys.includes(key));
                                },
                            },
                        })
                        "
                    />
                </template>
            </a-transfer>
        </section>
    </div>
</template>

<script>
import Header from './components/header';
import difference from 'lodash/difference';
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    datetime: '2020-10-11',
    description: `description of content${i + 1}`,
    disabled: i % 4 === 0,
  });
}

const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
  {
    dataIndex: 'title',
    title: '事项',
  },
  {
    dataIndex: 'datetime',
    title: '时间',
  },
  {
    dataIndex: 'description',
    title: '描述',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'datetime',
    title: '时间',
  },
];
export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            mockData,
            targetKeys: originTargetKeys,
            disabled: false,
            leftColumns: leftTableColumns,
            rightColumns: rightTableColumns,
        };
    },
    methods: {
        onChange(nextTargetKeys) {
            this.targetKeys = nextTargetKeys;
        },
        getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
            return {
                getCheckboxProps: item => ({ props: { disabled: disabled || item.disabled } }),
                onSelectAll(selected, selectedRows) {
                    const treeSelectedKeys = selectedRows
                    .filter(item => !item.disabled)
                    .map(({ key }) => key);
                    const diffKeys = selected
                    ? difference(treeSelectedKeys, selectedKeys)
                    : difference(selectedKeys, treeSelectedKeys);
                    itemSelectAll(diffKeys, selected);
                },
                onSelect({ key }, selected) {
                    itemSelect(key, selected);
                },
                selectedRowKeys: selectedKeys,
            };
        },
    }
}
</script>

<style lang="less" scoped>
.content {
    padding: 20px;
}
</style>