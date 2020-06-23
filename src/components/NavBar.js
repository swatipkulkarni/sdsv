import React from 'react'
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from '../layout/SignedOutLinks'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NavBar=(props)=>{
    const {auth,profile}=props
    const links=auth.uid?<SignedInLinks profile={profile}/> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="brand-logo left">
            <Link to={'/'}> Sourabha Dasa Sahitya Vidyalaya</Link>
            </div>
        <ul className="right">
            {links}
        </ul>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(NavBar)