import { useSelector } from "react-redux"
import NotesItem from "./NotesItem"

const NotesList = () =>{
   
    const notes =useSelector((state) =>{
        return state.notes
    })

    console.log('notes-lit-component',notes)

    return (
        <div>
           <h1>Notes-{notes.length}</h1>
            {
                notes.map((ele,i)=>{
                   return <NotesItem
                   key={i} 
                    {...ele}/>
                })
            }
        </div>
    )
}
export default NotesList