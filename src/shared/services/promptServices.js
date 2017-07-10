import { Toast } from 'mint-ui';
var prompt = {
    alert(message){
        Toast({
            message: message,
            position: 'bottom',
            duration: 2000
        });
    }
};
export  default prompt;
