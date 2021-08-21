
const initalstate ={}

const authReducers =(state=initalstate,action)=>{
  switch (action.type) {
    
  case 'LOGIN':{
      return  {...state, ...action.payload}
  }
         default :{
        return {...state}
    }
  }


}

export default authReducers