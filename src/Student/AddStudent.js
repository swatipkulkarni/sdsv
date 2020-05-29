import React, { Component } from 'react'
import {addStudent} from '../store/reducers/actions/StudentActions'
import {connect} from 'react-redux'

class AddStudent extends Component {
    state={
        email:"",     
        firstName:"",
        lastName:"",
        phone:"",
        address:"",
        pincode:"",
        city:"",
        state:"",
        country:""
    }
    handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("state",this.state)
        this.props.addStudent(this.state)
        alert("added to firestore")
    }   
     render() {
        return (
            <div className="container">
                <form action="" className="white">
                    <h5 className="grey-text text-darken-3">Add a new Student</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email ID</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="address">Address</label>
                        <textarea  className="materialize-textarea" id="address" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="pincode">Area Pin Code</label>
                        <input type="text" id="pincode" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" onChange={this.handleChange} />
                    </div>                    
                    <div className="input-field">                        
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSubmit}>Register Student</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) =>{
return{
    addStudent:(student)=>dispatch(addStudent(student))}
}
export default connect(null,mapDispatchToProps)(AddStudent)
