
//import { useFirebase } from 'react-redux-firebase'

export const addStudent = (student) =>{
    console.log('inside add student firestore');
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //make async call to db to get the data
        console.log(student);
        const firestore = getFirestore();
        console.log("firestore",firestore)
       
        firestore.collection('students').doc('test').set({
            ...student,       
            createdAt:new Date()
        }).then(()=>{
            console.log("Document added successfully")
            dispatch({type:'ADD_STUDENT',student})
        }).catch((err)=>{
            dispatch({type:'ADD_STUDENT_ERROR',err})
        })
     }
}
