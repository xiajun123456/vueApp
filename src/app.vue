<template>
    <div id="app" v-bind:class="{'is-login':isLogin}" >
        <!--<global-header></global-header>-->
        <menu-a></menu-a>
        <div class="content-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import menuA from './shared/components/menus.vue';
    import globalHeader from './shared/components/global-header.vue';
    export default {
        name: 'app',
        computed: {
            isLogin: function () {
//                return false
                return this.$store.state.isLogin
            }
        },
        components: {
            menuA: menuA,
            globalHeader: globalHeader
        }
    }
</script>

<style lang="scss" type="text/scss">
    .content-view {
        transition: all 0.2s linear;
        position: absolute;
        top: 0px;
        left: 0px;
        background: #fff;
        right: 0;
        bottom: 26px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 41px 15px 10px;
    }

    .is-login {
        .menu {
           margin-bottom:-3.5em;
        }
        .content-view {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
        }
    }
</style>