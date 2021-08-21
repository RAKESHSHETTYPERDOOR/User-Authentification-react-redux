
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


function App() {
  const [loggedIn,setLoggedIn] =useState(false)

  const handleauth =() =>{
    setLoggedIn(!loggedIn)
  }


  useEffect (()=>{
  
   if(localStorage.getItem('token')){
      handleauth()
   }


  },[])


  return (
    <div>

      <NavBar loggedIn ={loggedIn} handleauth ={handleauth}/>


    </div>
  );
}

export default App;
