import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../store/reducers/actions/authAction'
import {Redirect} from 'react-router-dom'

class Signin extends Component {
    state={
        email:"",
        password:""
    }
    handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.signIn(this.state)
    }   
     render() {
         const {authError,auth}=this.props
            if(auth.uid) return <Redirect to='/' />
            return (
            <div className="container">
                <form action="" className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email ID</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">                        
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Login</button>
                        
                        <div className="red-text center">
                        {authError? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    signIn:(creds)=>dispatch(signIn(creds))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
