import {useSelector} from 'react-redux'
import NotesForm from './NotesForm'
import NotesList from './NotesList'
import Addnots from './AddNotes'


const Notes =() =>{

    return (
        <div>
          <NotesList/>  
          <Addnots/>
        </div>
      )
  }
  export default Notes







