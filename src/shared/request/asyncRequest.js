import axios from 'axios'
import myVue from '../../index.js'
import storage from  '../services/storageService.js';
import  formatQueryParams from '../services/formatQueryParamsService'
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';           //配置请求头

//截取响应头部
axios.interceptors.request.use((config) => {
    //设置token
    if (storage.get('user')) {
        config.headers.token = storage.get('user').token;
    }
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //设置响应状态码
    if (res.data.resultCode == '0000') {
        // _.toast(res.data.msg);
        //正常状态响应
        return Promise.resolve(res.data);
        //    0003错误状态码
    } else if (res.data.resultCode == '0003') {
        storage.remove('user');
        myVue._router.push({path: '/login'});
    }
    //错误响应
    return Promise.reject(res.data);
}, (error) => {
    console.log(error)
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


export default {
    user: {
        login(params){
            return fetch('../rsms_2.0/user/login', params)
        },
        menu(params){
            return fetch('../rsms_2.0/user/menus', params)
        },
        getUser(params){
            return fetch('../rsms_2.0/user/getUser', params)
        },
        addUser(params){
            return fetch('../rsms_2.0/user/addUser', params)
        },
        editUser(params){
            return fetch('../rsms_2.0/user/editUser', params)
        },
        deleteUser(params){
            return fetch('../rsms_2.0/user/deleteUser', params)
        }
    },
    enroll: {
        getCode(params){
            return fetch('../rsms_2.0/enroll/getCode', params)
        },
        enrollment(params){
            return fetch('../rsms_2.0/enroll/enrollment', params)
        }
    },
    dashboard: {
        getPreviewList(params){
            return fetch('../rsms_2.0/dashboard/getPreviewList', params)
        },
        getCommodityList(params){
            return fetch('../rsms_2.0/dashboard/getCommodityList', params)
        },
        getHoldingDetails(params){
            return fetch('../rsms_2.0/dashboard/getHoldingDetails', params)
        },
        bid(params){
            return fetch('../rsms_2.0/dashboard/bid', params)
        }
    },
    spike:{
        getSpikeList(params){
            return fetch('../rsms_2.0/spike/getSpikeList', params)
        },
        getSpikeTime(params){
            return fetch('../rsms_2.0/spike/getSpikeTime', params)
        },
        getSpikeCommoditylist(params){
            return fetch('../rsms_2.0/spike/getSpikeCommoditylist', params)
        },
        getSpikeProductDetails(params){
            return fetch('../rsms_2.0/spike/getSpikeProductDetails', params)
        }
    },
    personal: {
        loginOut(params){
            return fetch('../rsms_2.0/personal/loginOut', params)
        },
        getAddressList(params){
            return fetch('../rsms_2.0/personal/getAddressList', params)
        },
        addedAddress(params){
            return fetch('../rsms_2.0/personal/addedAddress', params)
        },
        getBankList(params){
            return fetch('../rsms_2.0/personal/getBankList', params)
        },
        deleteBank(params){
            return fetch('../rsms_2.0/personal/deleteBank', params)
        },
        geAllbBank(params){
            return fetch('../rsms_2.0/personal/geAllbBank', params)
        },
        addBank(params){
            var params = formatQueryParams.format(params)
            return fetch('../rsms_2.0/personal/addBank', params)
        },
        saveUser(params){
            return fetch('../rsms_2.0/personal/saveUser', params)
        },
        setPaymentPassword(params){
            return fetch('../rsms_2.0/personal/setPaymentPassword', params)
        }
    },
    area: {
        getCitys(params){
            return fetch('../rsms_2.0/area/getCitys', params)
        },
        getAreas(params){
            return fetch('../rsms_2.0/area/getAreas', params)
        },
        getProvince(params){
            return fetch('../rsms_2.0/area/getProvince', params)
        }
    }
}