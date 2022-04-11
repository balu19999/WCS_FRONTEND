import React from 'react';
import UserEmailValues from './UserEmailValues'; 
import {Link} from 'react-router-dom'
import validate from './ValidateSignup'
import labels from '../config/labels';
const LoginSignup=(props)=>{
const{ handleChange,values,handleSubmit,errors}=UserEmailValues(validate);
const {setLoginWithOtp} = props;

return(
    <div className="container white">
        
        <form className="text-box" onSubmit={handleSubmit}>
                
            <h5 className="Left">Login</h5>
                <input 
                type="text" name="username" placeholder="Enter email" id="username" value={values.username} onChange={handleChange}/>
                 {errors.username && <p>{errors.username}</p>}
                <p className="message" style={{color:'black'}}>{labels.LOGINSIGNUP.NEVER_SHARE_YOUR_DETAILS}</p>
                
                <input 
                type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <p className="message center" style={{color:'black'}}>{labels.LOGINSIGNUP.DONT_HAVE_ACCNT} <a href='/login'>{labels.LOGINSIGNUP.CREATE_NEW_ACCOUNT}</a></p>
                
                <div>
                 <button  onClick={()=>setLoginWithOtp(true)}   className="blue darken-3">{labels.LOGINSIGNUP.LOGIN_THROUGH_OTP}</button>
                </div>
                 <button className="green darken-4">{labels.LOGINSIGNUP.AFTER_FILLED_ALL_DETAILS}</button>
                <div> <Link to="/">
                 <span><button className="blue darken-3 right">{labels.LOGINSIGNUP.CLOSE_LOGINSIGNUP_PAGE}</button></span>
                </Link></div>
    </form>
</div>   
)
    }
export default LoginSignup