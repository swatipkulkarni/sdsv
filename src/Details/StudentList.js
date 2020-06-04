import React,{Component} from 'react'
import {connect} from 'react-redux'

class StudentList extends Component {          
   
     render() {           
    const students=this.props.students;
    // console.log('inside student', this.props)
        return(
           
            <div className="container">
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                  {students.map(student=>{
                   return ( 
                    <tbody>
                        <tr key={student.studentid} >
                        <td>{student.name}</td>
                        <td>{student.marksSheet.map(m=>{
                           return (<td>{m.marks}</td>)
                        })}</td>
                        </tr>       
                    </tbody>                                
                    )
                })}   
                 </table>                          
           </div>
        )}   
}
const mapStateToProps = (state,ownprops) =>{
    let id=ownprops.match.params.id
    return{
        // students: state.student
            students:state.student.students.filter(student=>student.currentyear===id)
        }
}
export default connect(mapStateToProps)(StudentList)