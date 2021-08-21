import NotesForm from './NotesForm'
import { editnote } from '../../actions/notesAction'
import { useDispatch } from 'react-redux'

const EditNote = (props) =>{
    const {title,body,_id,handletoggle}=props

    const dispatch =useDispatch()

    const formsubmission =(id,data) => {
    dispatch(editnote(id,data))
    }
    
    return (
        <div>
            <h1>Edit note component</h1>
            <NotesForm
            title={title}
            body={body}
            _id={_id}
            formsubmission ={formsubmission}
            handletoggle={handletoggle}
            />
            
        </div>
    )
}
export default EditNote