//it will checks the condition for Otp
import labels from '../config/labels'
export default function ValidateOtp(values){
    let errors ={}
    
    if(!values.phonenumber.trim()){
        errors.phonenumber=<p style={{color:"red"}}>{labels.VAL_OTP.ENTER_PHONE_NUMBER}</p>
    }else if(!/^\d+$/.test(values.phonenumber)){
        errors.phonenumber=<p style={{color:"red"}}>{labels.VAL_OTP.PHONE_NUMBER_CONTAINS}</p>
    }
    else if(values.phonenumber.length < 10){
        errors.phonenumber=<p style={{color:"red"}}>{labels.VAL_OTP.PHONE_NUMBERS_MUST_HAVE}</p>
    }
    else if(values.phonenumber.length > 10){
        errors.phonenumber=<p style={{color:"red"}}>{labels.VAL_OTP.PHONE_NUMBERS_NOT_MORETHAN}</p>
    }
    return errors;
}