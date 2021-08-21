import { useState } from "react"
import { register } from "../actions/authaction"
import { useDispatch } from "react-redux"

const Register =()=>{
     const [name,setName] =useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword] =useState('')    

    const dispatch =useDispatch()
    const handlechange =(e) =>{
        if(e.target.name === 'username'){
           setName(e.target.value)
        }
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
        
    const handlesubmit =(e) =>{
        e.preventDefault()
        const data ={
            username:name,
            email:email,
            password:password
        }
        dispatch(register(data))
    }
        
    
    
     return(
        <div>
           <form onSubmit={handlesubmit}>

               <label>Enter username</label> <br/>
               <input
               type='text'
               placeholder='enter the username'
               value={name}
               onChange ={handlechange}
               name='username'
               /> <br/>

               <label>Enter The Email</label> <br/>
               <input
               type ='text'
               placeholder='enter the email'
               onChange ={handlechange}
               name='email'
               value={email}
               /> <br/>

               <label>Enter the Password</label> <br/>
               <input
               type='password'
               name='password'
               onChange={handlechange}
               name='password'
               value={password}
               placeholder='enter the password'
               /> <br/>
               
               <input
               type ='submit'
               value='Register'
               
               />
           </form>
        </div>
    )


}
export default Register