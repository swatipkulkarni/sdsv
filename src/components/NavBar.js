import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import SignedInLinks from '../layout/SignedInLinks'
import SignedOutLinks from '../layout/SignedOutLinks'

const NavBar=(props)=>{
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="brand-logo">
                Sourabha Dasa Sahitya
            </div>
        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <SignedInLinks />
            <SignedOutLinks />
        </ul>
        </nav>
    )
}

export default withRouter(NavBar)