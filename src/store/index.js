import storage from '../shared/services/storageService.js'
const store = {
    state: {
        isLogin:false,
        holdingDetail:{},
        user:storage.get('user')?storage.get('user'):[],
        address:{},
        loginState:''
    },
    actions: {

    },
    mutations: {

    },
    getters: {

    }
};

export default store