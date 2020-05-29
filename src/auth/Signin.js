import React, { Component } from 'react'

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
    }   
     render() {
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
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
