import {createStore,combineReducers,applyMiddleware} from 'redux'
import authReducers from '../reducers/authReducers'
import notesReducers from '../reducers/notesReducers'
import thunk from 'redux-thunk'



const ConfigureStore = () => {
  const store =createStore(combineReducers({
      auth:authReducers,
      notes:notesReducers
  }),applyMiddleware(thunk))
  return store
}
export default ConfigureStore
