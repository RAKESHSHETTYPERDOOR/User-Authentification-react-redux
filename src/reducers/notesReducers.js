

const initalstate =[]

const notesReducers =(state=initalstate,action) =>{
switch(action.type){
    case 'ADD_NOTES':{
        return [...state,{...action.payload}]
    }
    case 'GET_USERS' :{
        return [...action.payload]
    }

    case 'DELETE_NOTE':{
        return state.filter((ele)=>{
           return ele._id != action.payload
        })
    }
    case 'EDIT_NOTE':{
        return state.map((ele)=>{
            if(ele._id === action.payload.id){
                return {...ele, ...action.payload.data}
            }else{
                return {...ele}
            }
        })
    }
        default:{
        return [...state]
    }
}

    
}
export default notesReducers