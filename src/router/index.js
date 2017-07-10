//首页
import dashboard from '../pages/dashboard/dashboard.vue';
//预览列表
import previewList from '../pages/dashboard/preview-list.vue'
//详情页面
import holdingDetail from '../pages/dashboard/holding-detail.vue';
//评论列表
import  bid from '../pages/dashboard/bid-history.vue';

//登陆
import login from '../pages/login/login.vue';
//注册
import enrollment from '../pages/login/enrollment .vue';
//指南页面
import guide from '../pages/login/guide.vue';
//修改密码
import  retrievePwd from  '../pages/login/retrieve-pwd.vue';

//个人中心
import  personal from '../pages/personal/personal-center.vue';
//设置
import setting from '../pages/personal/setting.vue';
//我的资料
import myData from '../pages/personal/my-data.vue';
//修改支付密码
import  payMent from '../pages/personal/payment-password.vue';
//修改登陆密码
import loginPwd from  '../pages/personal/login-password.vue';
//订单页面
import  order from '../pages/personal/order.vue';
//账户余额
import  accountBalance from  '../pages/personal/account-balance.vue';
//收货地址
import address from '../pages/personal/shipping-address.vue';
//新增收货地址
import  addedAddress from '../pages/personal/added-address.vue'
//银行卡
import  bank from '../pages/personal/my-bank.vue';
//添加银行卡
import  addBank from '../pages/personal/add-bank.vue'
//消息
import message from '../pages/message/message.vue';


//秒杀
import  spike from '../pages/spike/spike.vue';
//秒杀列表
import  spikeList from '../pages/spike/spike-list.vue';
//秒杀商品列表
import  spikeProductDetails from '../pages/spike/spike-product-details.vue'
let routes = [
    {
        path:'/dashboard',
        name:'dashboard',
        component:dashboard
    },
    {
        path:'/previewList/:typeId',
        name:'previewList',
        component:previewList
    },
    {
        path:'/holdingDetail/:id',
        name:'holdingDetail',
        component:holdingDetail
    },
    {
        path:'/bid',
        name:'bid',
        component:bid
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/enrollment',
        name:'enrollment',
        component:enrollment
    },
    {
        path:'/guide',
        name:'guide',
        component:guide
    },
    {
        path:'/retrievePwd',
        name:'retrievePwd',
        component:retrievePwd
    },
    {
        path:'/personal',
        name:'personal',
        component:personal
    },
    {
        path:'/setting',
        name:'setting',
        component:setting
    },
    {
        path:'/myData',
        name:'myData',
        component:myData
    },
    {
        path:'/payMent',
        name:'payMent',
        component:payMent
    },
    {
        path:'/loginPwd',
        name:'loginPwd',
        component:loginPwd
    },
    {
        path:'/order',
        name:'order',
        component:order
    },
    {
        path:'/accountBalance',
        name:'accountBalance',
        component:accountBalance
    },
    {
        path:'/address',
        name:'address',
        component:address
    },
    {
        path:'/addedAddress',
        name:'addedAddress',
        component:addedAddress
    },
    {
        path:'/bank',
        name:'bank',
        component:bank
    },
    {
        path:'/addBank',
        name:'addBank',
        component:addBank
    },
    {
        path:'/message',
        name:'message',
        component:message
    },
    {
        path:'/spike',
        name:'spike',
        component:spike
    },
    {
        path:'/spikeList/:typeId',
        name:'spikeList',
        component:spikeList
    },
    {
        path:'/spikeProductDetails/:typeId',
        name:'spikeProductDetails',
        component:spikeProductDetails
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/dashboard' }
    }
];

export  default routes;