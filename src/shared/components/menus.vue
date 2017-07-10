<template>
    <div class="menu">
        <div class="menu-item"
             v-for="menu in menus"
             @click="active(menu)"
             :class="{active:activeUrl == menu.url}">
            <span :class="menu.icon"></span>
            <small>{{menu.name}}</small>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import storage from '../services/storageService.js';
    export default {
        name: 'menuA',
        data() {
            return {

            }
        },
        methods: {
            active(menu){
//                this.activeUrl = menu.url;
                this.$router.push({path: menu.url});
            }
        },
        watch: {
            path(newVal, oldVal){
                if (!this.setPath) {
                    return
                }
                this.setPath()
            }
        },
        computed: {
            menus(){
                return [
                    {
                        name: '首页',
                        icon: 'glyphicon glyphicon-home',
                        url: '/dashboard'
                    },
                    {
                        name: '秒杀',
                        icon: 'glyphicon glyphicon-flash',
                        url: '/spike'
                    },
                    {
                        name: '消息',
                        icon: 'glyphicon glyphicon-comment',
                        url: '/message'
                    },
                    {
                        name: '我的',
                        icon: 'glyphicon glyphicon-user',
                        url: '/personal'
                    }
                ]
            },
            activeUrl(){
                return this.$route.fullPath
            }
        },
        beforeMount(){

        }
    }
</script>
<style lang="scss" type="text/scss">
    .menu {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3.5em;
        z-index: 900;
        padding: 0.5em 0;
        background: #fff;
        &:after {
            content: '';
            display: block;
            clear: both;
        }
        .menu-item {
            width: 25%;
            text-align: center;
            color: #333;
            float: left;
            span {
                font-size: 16px;
                color: #666;
            }
            small {
                display: block;
                font-size: 12px;
            }
        }
        .active {
            span {
                color: #e33;
            }
            small {
               color: #e33;
            }
        }
    }
</style>