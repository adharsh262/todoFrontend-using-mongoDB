import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './index.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import Header  from '../Header'
const Login = () => {

    const [credientials,setCredientials]=useState({userName:'',password:''})
    const navigate=useNavigate()
    const onChangeValues=(e)=>{
        setCredientials({...credientials,[e.target.name]:e.target.value})
    }


    const onSubmitForm=async(e)=>{
        try {
            e.preventDefault()

        
        const url="http://localhost:5000/api/loginUser"
        const body={userName:credientials.userName,password:credientials.password}
        const userData=await axios.post(url,body)
        if(userData.status===200) {
           
           alert(userData.data.msg)
            navigate("/")
            
            Cookies.set("jwtToken",userData.data.jwtToken)
            Cookies.set("userName",userData.data.userName)
        }
        
        
        // if(userData.status===200) {
        //     alert(userData.data.msg)
        //     // navigate("/")
        // }
        // if(userData.status===400){
        //     alert(userData.data.msg)
        // }    
        } catch (error) {
            
            if(error.response) {
                alert(error.response.data.msg)
            }
        }

        
    }


    
    return (
        <div>
            
        <Header />
        
        <div className='bgContainer'>
        <div className='loginPage shadow lg-shawod'>
            
            <form className='loginFormEL sm-shadow lg-shadow card p-5' onSubmit={onSubmitForm}>
            <h3>Login</h3>
                <input type='email' className='form-control my-2 border-danger' name='userName' value={credientials.userName} onChange={onChangeValues} placeholder='abc@gmail.com'/>
                <input type='password' className='form-control my-4 border-danger' name='password' value={credientials.password} onChange={onChangeValues} placeholder='min of 5 Characters'/>
                <div>
                    <button type='submit' className='btn btn-outline-danger' title='Login'>Login</button>
                    <strong className='mx-3'>OR</strong>
                    <Link to="/signup">
                    <button className='btn btn-outline-danger' type='button' title='Signup'>Sign up</button>
                    </Link>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Login