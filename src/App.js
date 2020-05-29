import React,{Component} from 'react';
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import StudentDetails from './Details/StudentDetails'
import Signin from './auth/Signin'
import SignUp from './auth/Signup'
import AddStudent from './Student/AddStudent'
import StudentList from './Details/StudentList'

class App extends Component{
  render(){
  return(
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/student/:id" component={StudentDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add" component={AddStudent} />
          <Route path="/studentlist/:id" component={StudentList} />
          <Route path="/student/:id" component={StudentDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )}
}

export default App;
