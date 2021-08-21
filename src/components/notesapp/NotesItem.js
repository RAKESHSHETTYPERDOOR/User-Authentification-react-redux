import { deletenote } from "../../actions/notesAction"
import { useDispatch } from "react-redux"
import EditNote from "./EditNote"
import { useState } from "react"
import Notes from "./Notes"


const NotesItem =(props) =>{
    const {title,body,_id}=props
    console.log('editcompo',title)
    const [toggle,setToggle] =useState(false)

    const dispatch =useDispatch()

    const handledelte =(id) =>{
        dispatch(deletenote(id))  
    }
    const handletoggle =() =>{
        setToggle(!toggle)
    }
   
     return (
        <div>
            {
            toggle ?
                <div>
                <EditNote
                _id={_id}
                title ={title}
                body ={body}
                handletoggle={handletoggle}
                />
                <button onClick={handletoggle}>Cancel</button>
                </div> 
                :
                
                <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button onClick={()=>{handledelte(_id)}}>Delete</button>
                <button onClick={handletoggle}>Edit</button>
                </div>
          }
       </div>
    )
}
export default NotesItem