import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ConfigureStore from './store/ConfigureStore';
import  {getUsers}  from './actions/notesAction';

const store = ConfigureStore()  

store.subscribe(()=>{
  console.log('state updated',store.getState())
})

console.log(store.getState())

if(localStorage.getItem('token')){
  store.dispatch(getUsers())
}

ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter >
            <App/>
        </BrowserRouter>
     </Provider>
  ,
  document.getElementById('root')
);

