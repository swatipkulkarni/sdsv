import React, {Component} from 'react'
// import Notifications from '../dashboard/Notifications'
import {connect} from 'react-redux'
import Summary from '../Details/Summary'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component {
    render(){
        const {sem}=this.props;
        return(
            <div className="container-fluid">
                 <Summary sem={sem}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        students:state.firestore.ordered.students,
        sem:state.year.year
    }
}
export default compose(
    firestoreConnect(['students']),
    
    connect(mapStateToProps)
)(Dashboard)