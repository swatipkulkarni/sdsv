import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

class StudentList extends Component {
   render() {
        const {students,auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                 <table className="highlight">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Country</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    {students.map(student => {
                        return (
                            <tbody key={student.id}>
                                <tr>
                                <Link to={'/student/' + student.id}><td>{student.firstName+' '+student.lastName}</td></Link>
                                    <td>{student.city}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.country}</td>
                                    {/* <td>{student.marksSheet.map(sem=>{return (sem.totalMarks)})}</td> */}
                                </tr>
                            </tbody>
                        )
                    })}
                </table> 
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        students: state.firestore.ordered.students
    }
}

export default compose(
    firestoreConnect((ownProps)=>[{
        collection: 'students',
        where: ['currentYear', '==', parseInt(ownProps.match.params.id)]}
    ]),
connect(mapStateToProps,null))(StudentList)