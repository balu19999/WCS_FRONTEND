//validating EmailId and Password while user login with Email//UserEmailValues
import { useState} from 'react';
const UseForm= validate =>{
    const [ values,setValues ]=useState({
        username:'',
        password:''
    })
     const [errors,setErrors]=useState({});
     const handleChange= e =>{
        const{ name,value }=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validate(values));
    }
return{handleChange,values,handleSubmit,errors};

};
export default UseForm;