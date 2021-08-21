import { useEffect, useState } from "react"
import { login } from "../actions/authaction"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { withRouter } from "react-router"



  const Login =(props)=>{
  const {handleauth} =props

  const [email,setEmail]=useState('')
  const [password,setPassword] =useState('')

  const notes =useSelector((state)=>{
      return state.auth
  })
 
  const dispatch = useDispatch()

  const handlechange =(e) =>{
  if(e.target.name ==='email'){
    setEmail(e.target.value)
  }
  if(e.target.name === 'password'){
    setPassword(e.target.value)
  }
  }

   const handleRedirect = () =>{
   props.history.push('/home')
   alert('sucessfully-loged-in')
   handleauth()
   setEmail('')
   setPassword('')

}

    const handlesubmit =(e) =>{
    e.preventDefault()
    const data ={
        email:email,
        password:password
    }
    dispatch(login(data,handleRedirect))
   
    
}
    return(
      
        <div>

            <form onSubmit ={handlesubmit}>
                <label>ENTER EMAIL</label> <br/>
                <input
                type='text'
                placeholder='enter the email'
                value={email}
                onChange={handlechange}
                name='email'
                /> <br/>
     
                <label>ENTER PASSWORD</label> <br/>
                <input
                type='password'
                type='text'
                placeholder='enter the password'
                onChange={handlechange}
                value ={password}
                name ='password'
                /> <br/>

                <input
                type ='submit'
                value='Login'
                />
            </form>
        </div>
    )
}
export default Login