import React,{useState} from "react";
import LoginWithOTP from "../components/LoginWithOTP";
import LoginSignup from '../components/LoginSignup'

 const Login=(props)=>{
    const [LoginWithOtp,setLoginWithOtp]=useState(false);

    const LoginWithOtP = () =>
    setLoginWithOtp( prevState =>!prevState)
    if(LoginWithOtp){
        return <LoginWithOTP setLoginWithOtp={LoginWithOtP}/>
    }   
        return <LoginSignup setLoginWithOtp={LoginWithOtP}/>
  }
export default Login