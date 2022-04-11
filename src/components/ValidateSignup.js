//it will checks the conditions for EmailId and Password
import labels from '../config/labels'
export default function ValidateSignup(values){
    let errors ={}
    if(!values.username.trim()){
        errors.username=<p style={{color:'red'}}>{labels.VAL_EMAIL.ENTER_EMAIL_ID}</p>
    }else if(!/^[A-Z+0-9._%+-]+@gmail+\.com/i.test(values.username)){
        errors.username=<p style={{color:"red"}}>{labels.VAL_EMAIL.INVALID_EMAIL} 
        <span style={{color:"blue"}}>{labels.VAL_EMAIL.ENTER_EMAIL_IN_CORRECT_FORMAT}</span></p>
    }
    if(!values.password.trim()){
        errors.password=<p style={{color:'red'}}>{labels.VAL_EMAIL.ENTER_YOUR_PASSWORD}</p>
    }
    else if(values.password.length < 6){
        errors.password=<p style={{color:"red"}}>{labels.VAL_EMAIL.PASSWORD_MUST_BE}</p>
    }else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)){
        errors.password=<p style={{color:"red"}}>{labels.VAL_EMAIL.PASSWORD_INCLUDES}<span style={{color:'blue'}}>{labels.VAL_EMAIL.PASSWORD_CONTAINS}</span></p>
    }
return errors;
}


