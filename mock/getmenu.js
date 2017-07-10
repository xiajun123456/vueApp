module.exports = {
    url: '/rsms_2.0/user/menus',
    data:{
        resultCode:'0000',
        message:'token已过期!',
        menus:[{
            name:'首页',
            icon:'el-icon-menu',
            drop:[
                {
                    name:'地图',
                    icon:'glyphicon glyphicon-globe',
                    url:'/map'
                }
            ]}]
    }
};