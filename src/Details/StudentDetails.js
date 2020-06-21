import React,{Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class StudentDetails extends Component {    
     render() {  
        const {students,auth}=this.props; 
        console.log(auth)
        if(!auth.uid) return <Redirect to='/signin' /> 
        return(
            <div className="container">                               
                    <div className="card z-depth-0">
                         <div>Name: </div>
                         <div>Current Year: </div>
                         <div>markSheet: </div> 
                    </div>                         
           </div>          
        )}   
}
const mapStateToProps = (state) =>{
    console.log(state)
    return{
        auth:state.firebase.auth,
        students:state.firestore.ordered.students
    }
}
export default compose(
   firestoreConnect((ownProps)=>[{
        collection: 'students',
        where: ['id', '==', ownProps.match.params.id]}
    ]), connect(mapStateToProps),
)(StudentDetails)

// export default compose(
//     firestoreConnect(['students']), 
//     connect(mapStateToProps),
//  )(StudentDetails)