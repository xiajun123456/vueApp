/**
 * Created by xiajun on 2017/4/12.
 */
import Vue from 'Vue';

export  default  Vue.directive('focus',{
   inserted: function (el,binding,vnode,oldVnode) {

       el.style.color = '#f00'
   }
});