<template>
    <div class="home">
        <section class="header">
            <span class="header-search">
                <a-icon type="search" class="search-icon"/>
                <input 
                    v-model="searchText"
                    type="text"
                    class="search"
                    placeholder="Search"
                />
            </span>
            <span class="header-add pointer" @click="visible = true">
                <a-icon type="plus" class="add-icon"/>
            </span>
            <span class="header-add pointer" @click="reload">
                <a-icon type="reload" class="add-icon"/>
            </span>
        </section>
        <a-modal
            v-if="visible"
            v-model="visible" 
            @ok="addItem" 
            title="Add TodoList" 
            okText="确认" 
            cancelText="取消"
        >
            <a-form-model
                ref="ruleForm"
                :model="form"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
            >
                <a-form-model-item label="事项名称" prop="name" ref="name">
                <a-input
                    v-model="form.name"
                    @blur="
                    () => {
                        $refs.name.onFieldBlur();
                    }
                    "
                />
                </a-form-model-item>
                <a-form-model-item label="时间" required prop="datetime">
                    <a-range-picker
                        v-model="form.datetime"
                        style="width: 100%;"
                    />
                </a-form-model-item>
                <a-form-model-item label="描述" prop="desc">
                    <a-input v-model="form.desc" autoSize type="textarea" />
                </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'HomeHeader',
    components: {},
    data() {
        return {
            searchText: '',
            visible: false,
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
            form: {
                name: '',
                datetime: undefined,
                desc: '',
            },
            rules: {
                name: [{ required: true, message: '请输入事项名称', trigger: 'blur' }],
                datetime: [{ required: true, message: '请输入时间', trigger: 'change' }],
            },
        };
    },
    methods: {
        onSearch(value) {
            console.log(value);
        },
        addItem() {
            this.$refs.ruleForm.validate(valid => {
                console.log(this.$refs.ruleForm.model)
                if (valid) {
                    this.visible = false;
                }
            });
        },
        reload() {
            console.log(111)
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background-color: #d8e6df;
    padding: 0 18px;
    display: flex;
    .header-search {
        flex: 1;
        .search-icon {
            font-size: 20px;
            vertical-align: middle;
        }
        .search {
            width: 80%;
            padding: 14px 6px;
            background-color: inherit;
            border: none;
            outline: medium;
            font-size: 16px;
            // color: rgb(251, 207, 201);
        }
    }
    .header-add {
        .add-icon {
            font-size: 18px;
            line-height: 52px;
            margin-left: 10px;
        }
    }
}
</style>