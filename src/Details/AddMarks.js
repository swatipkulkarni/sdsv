import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import {addMarks} from '../store/reducers/actions/StudentActions'

class AddMarks extends Component {
    // state={
    //     marksSheet:[
    //         {sem:[
    //             {assignment:0,written:0,total:0}]
    //         }
    //     ]
    // }

     handleChange = (e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit = (e,id) => {
        e.preventDefault();
        const sem = {
                assignment: this.state.assignment,
                written: this.state.written,
                total: parseInt(this.state.assignment) + parseInt(this.state.written)
            }
        const marksSheetArray={marksSheet:[
                    {sem:[sem]
                    }
                ]}
        // this.setState({
        //     students: [this.state,marksSheetArray]
        // });
        // console.log("marksSheet added", this.state)
            this.props.addMarks(marksSheetArray,id)

        }  
    
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
                            <th>Assignment</th>
                            <th>Written</th>
                            <th>Total Marks</th>
                        </tr>
                    </thead>
                    {students.map(student => {
                        return (
                            <tbody key={student.id}>
                                <tr>
                                    <td>{student.firstName+' '+student.lastName}</td>
                                    <td>{student.city}</td>
                                    <td>{student.phone}</td>
                                    <td><div className="input-field">
                                        <input type="text" id="assignment" onChange={this.handleChange} />
                                    </div></td>
                                    <td><div className="input-field">
                                        <input type="text" id="written" onChange={this.handleChange} />
                                    </div></td>
                                    <td><button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>this.handleSubmit(e,student.id)}>
                                        <i className="material-icons right">send</i>
                                    </button></td>
                                    <td></td>
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
const mapDispatchToProps =(dispatch) =>{
    return{
        addMarks:(marksSheet,id)=>dispatch(addMarks(marksSheet,id))}
    }
export default compose(
    firestoreConnect((ownProps)=>[
        { collection: 'students' },{
        collection: 'students',
        where: ['currentYear', '==', parseInt(ownProps.match.params.id)]}
    ]),
connect(mapStateToProps,mapDispatchToProps))(AddMarks)