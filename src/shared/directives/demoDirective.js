/**
 * Created by xiajun on 2017/4/12.
 */
import Vue from 'Vue';

export  default Vue.directive('demo', {
    inserted: function (el,binding,vnode,oldVnode) {
        el.html = '这里是inserted 钩子函数'
    },
    bind: function (el) {
        el.html = '这里是bind 钩子函数'
    },
    update: function (el) {

    }
})