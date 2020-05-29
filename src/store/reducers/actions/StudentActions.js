export const addStudent = (student) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //make async call to db to get the data
        const firestore = getFirestore();
        firestore.collection('students').doc("New").set({
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
