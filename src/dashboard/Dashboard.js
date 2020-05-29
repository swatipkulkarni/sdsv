import React, {Component} from 'react'
import Notifications from '../dashboard/Notifications'
import {connect} from 'react-redux'
import Summary from '../Details/Summary'

class Dashboard extends Component {
    render(){
        const {sem}=this.props;
        return(
            <div className="post-card">
                <div className="row">
                    <div className="col s12 m6">
                        <Summary sem={sem}/>
                    </div>              
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        students:state.student.students,
        sem:state.year.year
    }
}
export default connect(mapStateToProps)(Dashboard)