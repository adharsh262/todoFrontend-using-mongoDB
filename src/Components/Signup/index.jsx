import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import Header from '../Header'

const Signup = () => {
    const [credientials,setCredientials]=useState({userName:'',password:'',name:''})
    const navigate=useNavigate()
    const onChangeValue=(e)=>{
        setCredientials({...credientials,[e.target.name]:e.target.value})
    }
    const onSubmitForm=async(e)=>{
        try {
            e.preventDefault()

        
        const url="http://localhost:5000/api/CreateUser"
        // const body={userName:credientials.userName,password:credientials.password}
        const userData=await axios.post(url,credientials)
        if(userData.status===200) {
           
           alert(userData.data.msg)
            navigate("/login")
        }
 
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
        <div className='loginPage'>
            <form className='loginFormEL sm-shadow lg-shadow card p-5 border-danger' onSubmit={onSubmitForm}>
                <h3>Sign up</h3>
                <input type='text' className='form-control my-2 border-danger' placeholder='Name' value={credientials.name} name='name' onChange={onChangeValue}/>
                <input type='email' className='form-control my-2 border-danger' placeholder='Username' value={credientials.userName} name='userName' onChange={onChangeValue}/>
                <input type='password' className='form-control my-2 border-danger' placeholder='Password' value={credientials.password} name='password' onChange={onChangeValue}/>
                    
                    <button className='btn btn-outline-danger mt-4' type='submit'>Sign up</button>
                    <strong className='mx-3'>OR</strong>
                    <Link to="/login">
                    <button type='button' className='btn btn-outline-danger'>Login</button>
                    </Link>
                    
                    
            </form>
        </div>
        </div>
        </div>
    )
}

export default Signup