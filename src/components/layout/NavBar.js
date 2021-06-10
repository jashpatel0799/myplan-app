import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

let NavBar = (props) => {
    let {auth, profile} = props
    // console.log(auth)
    let links = auth.uid ? <SignedIn profile={profile}/> : <SignedOut />
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">MyPlan</Link>
                    { links }
                </div>
            </nav>
        </div>
    )
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)