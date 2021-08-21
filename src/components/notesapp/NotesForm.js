import { useState } from "react"
import { addnote } from "../../actions/notesAction"
import { useDispatch } from "react-redux"

const NotesForm =(props) => {
    const {formsubmission,title:name,body:main,_id,handletoggle}=props

    const [title,setTitle] =useState(name ? name :'')
    const [body,setBody]  =useState(main ? main :'')

   const dispatch =useDispatch()

    const handleChange =(e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }
        if(e.target.name === 'body'){
            setBody(e.target.value)
        }
    }


    const handleSubmit =(e) =>{
        e.preventDefault()
        const data ={
            title:title,
            body:body
        }
        formsubmission (_id,data)
        setTitle('')
        setBody('')
        if(handletoggle){
            handletoggle()
        }
    }
        
 
    return(
       <form onSubmit ={handleSubmit}>
           <input
             type ='text'
             value ={title}
             onChange={handleChange}        
             placeholder ='title'
             name='title'
           /> <br/>
           <input
           type ='textarea'
           value ={body}
           onChange={handleChange}
           placeholder='body'
           name='body'
           /> <br/>

           <input
           type='submit' 
           value='add'
           
           />
       </form>
    )
     
}
export default NotesForm