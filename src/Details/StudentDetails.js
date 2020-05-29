import React,{Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class StudentDetails extends Component {    
     render() {  
        const students=this.props.students; 
        console.log(students)
        const id=this.props.match.params.id      
        return(
            <div className="container">               
                  {students.map(student=>{
                   return student.studentid===id ? (                      
                    <div className="card z-depth-0" key={student.studentid}>
                         <div>Name: {student.name}</div>
                         <div>Current Year: {student.currentyear}</div>
                         <div>markSheet: </div> 
                    </div>             
                    ):(
                        null
                    )
                })}                          
           </div>          
        )}   
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        students:state.student.students
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(['students'])
)(StudentDetails)