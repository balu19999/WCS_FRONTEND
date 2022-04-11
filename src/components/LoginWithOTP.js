import React from 'react'
import labels from '../config/labels';
import { useState } from 'react'
import UserOtpValues from './UserOtpValues';
import validate1 from './ValidateOtp'
import LoginContainer from '../container/LoginContainer'

const LoginWithOTP=(props)=> {
    const{ handleChange,values,handleSubmit,errors}=UserOtpValues(validate1);
    const [logOtp,setLoginOtp]=useState(false);
      if(logOtp){
        return <LoginContainer/>
      }
    
  return (
    <div className="container white">
     <form className="text-box" onSubmit={handleSubmit}>
         <h5 className="Left">Login</h5>
         <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber" value={values.phonenumber} onChange={handleChange}/>
         {errors.phonenumber && <p>{errors.phonenumber}</p>}
         <p></p>
         <div >
             <button className="green darken-4">{labels.LOGINWITHOTP.SEND_OTP}</button>
         </div>
         <p></p>
         <h6 className="center">{labels.LOGINWITHOTP.DIVIDER_OR}</h6>
         <p></p>
         <div className="center">
         <button onClick={()=>setLoginOtp(true)} className="green darken-4">{labels.LOGINWITHOTP.LOGIN_THROUGH_EMAIL}</button>
     </div>
     </form>
    </div>
  )
}

export default LoginWithOTP