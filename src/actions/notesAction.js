import axios from 'axios'

export const addnote =(data) =>{
    return (dispatch,getState) => {
        console.log(data)
        axios
        .post("http://dct-user-auth.herokuapp.com/api/notes", data, {
          headers: {
            "x-auth": JSON.parse(localStorage.getItem("token"))
          },
        })
         .then((response)=>{
            const data=response.data
            console.log('post-method',data)
            dispatch(addnotes(data))
         })
         .catch((err)=>{
           alert(err.message)
         })
    }
}


export const getUsers =() =>{
    return (dispatch,getState) =>{
        axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": JSON.parse(localStorage.getItem("token")),
        },
      })
        .then((response)=>{
            const data =response.data
            console.log(data)
            dispatch(getNotes(data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}


export const deletenote =(id) =>{
  console.log(id)
  return(dispatch,getState)=>{
    axios
    .delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
      headers: {
        "x-auth": JSON.parse(localStorage.getItem("token")),
      },
    })
  
  .then((response)=>{
    const data =response.data
    dispatch(deltenotes(data._id))
    
  })
  .catch((err)=>{
    alert(err.message)
  })
}
}





export const editnote = (id,data) =>{
   console.log('console-data',data)
  console.log('id',id)
  return (dispatch,state)=>{
    dispatch(edit(id,data))
    axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,data,
    {
      headers:{
        "x-auth":JSON.parse(localStorage.getItem('token'))
      }
    })
   .then((response)=>{
     const data =response.data
     console.log('edit-happened',data)

   })
   .catch((err)=>{
       alert(err.message)
   })
}
}

const addnotes = (data) =>{
   return {
    type:'ADD_NOTES',
    payload:data
   }
}

const getNotes = (data) =>{
    return {
        type:'GET_USERS',
        payload:data
    }
}

const deltenotes =(id) =>{
  return {
    type:'DELETE_NOTE',
    payload:id
  }
}


const edit = (id,data) =>{
  return {
    type:'EDIT_NOTE',
    payload:{
      id:id,
      data:data
    }
  }
}



