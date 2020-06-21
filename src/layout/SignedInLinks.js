import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../store/reducers/actions/authAction'

const SignedInLinks=(props)=>{
    return(
        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating grey">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)