import axios from 'axios'

export const register =(data) =>
{
    return (dispatch,getState)=>{

        axios.post('http://dct-user-auth.herokuapp.com/users/register',data)
        .then((response)=>{
            const data =response.data
            console.log(data)
            dispatch(registered(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    
export const login =(data,handleRedirect) => {
    return (dispatch,getState) =>{
        axios.post('http://dct-user-auth.herokuapp.com/users/login', data)
        .then((response)=>{
          const data =response.data
          handleRedirect()
          console.log(data)
          localStorage.setItem('token',JSON.stringify(data.token))
          dispatch(logined(data))
          })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

const registered  = (data) =>{
    return {
        type:'REGISTER',
        payload:data
    }

}

const logined = (data) =>{
    return {
        type:'LOGIN',
        payload:data
    }
}