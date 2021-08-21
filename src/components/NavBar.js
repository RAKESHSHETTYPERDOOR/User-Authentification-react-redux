import Home from './Home'
import Login from './Login'
import Register from './Register'
import Notes from './notesapp/Notes'
import {Link,Route,withRouter,history} from 'react-router-dom'



  const NavBar =(props) =>{
  const {loggedIn,handleauth} = props
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">      
      <Link to='/home' style ={{'padding':'5px'}}>Home</Link > <br/>
      {!loggedIn ?
      <div>
      <Link to='/login' style ={{'padding':'5px'}}>Login</Link> 
      <Link to='/register' style ={{'padding':'5px'}}>Register</Link>
      </div>
      :
       <div>
      <Link to='/account' style ={{'padding':'5px'}}> Account</Link>
      <Link to='/notes'>Notes</Link> 
      <Link to='#' onClick={()=>
      {
         alert('successfully logged-out')
          localStorage.removeItem('token')
          handleauth()
          props.history.push('/home')   
        }
      } style ={{'padding':'5px'}}>Logout</Link>
      </div>
      }
      </nav>
      <Route path='/home' component={Home}></Route>
      <Route path ='/login' render={(props)=>{
        return <Login {...props} handleauth ={handleauth}/> 
      }}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/notes' render={()=>{
        return <Notes/>
      }}>

      </Route>
</div>
    
  )

}

export default withRouter(NavBar)
