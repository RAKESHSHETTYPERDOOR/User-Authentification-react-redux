import NotesForm from "./NotesForm" 
import { useDispatch } from "react-redux"
import { addnote } from "../../actions/notesAction"

 const Addnotes = () =>{
 
    const dispatch =useDispatch()

    const formsubmission = (_id,data) =>{
        dispatch(addnote(data))
    }
    return (
        <div>
           <h1>Add-Notes</h1>
           <NotesForm formsubmission ={formsubmission}/> 
        </div>
    )
 }
 export default Addnotes