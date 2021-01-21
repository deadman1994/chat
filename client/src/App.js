import Signin from './component/auth/Signin.js'
import Signup from './component/auth/Signup.js'
import DeleteUser from './component/cruduser/deleteuser'
import UpdateUser from './component/cruduser/updateuser'
import Home from './component/home/Home'
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() { 

  /*function verifySession(obj) {
   sessionStorage.verifySession(obj);
    if(sessionStorage.verifySession){
     
    }
    else{
        History.push("/login");
    }
  }*/
  return (
    <div className="Container">
    <Switch>
    <Route path="/home" component={Home}/>
     <Route exact path="/" verifySession component={Signin} />
     <Route path="/signup" verifySession component={Signup} />
     <Route path="/delete" verifySession component={DeleteUser} />
     <Route path="/update" component={UpdateUser} />
    </Switch>
    </div>

  );
}

export default App;
