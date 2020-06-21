
//import { useFirebase } from 'react-redux-firebase'

export const addStudent = (student) =>{
    console.log('inside add student firestore');
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //make async call to db to get the data
        console.log(student);
        const firestore = getFirestore();
        console.log("firestore",firestore)
       
        firestore.collection('students').add({
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

export const addMarks = (marksSheet,studentid) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //const authid=getState().firebase.auth.uid
        console.log(studentid)
        const firestore = getFirestore();
        var sfDocRef = firestore.collection('students').doc(studentid)

// Uncomment to initialize the doc.
// sfDocRef.set({ population: 0 });

        firestore.runTransaction(function(transaction) {
            // This code may get re-run multiple times if there are conflicts.
            return transaction.get(sfDocRef).then(function(sfDoc) {
                if (!sfDoc.exists) {
                    throw "Document does not exist!";
                }

                // Add one person to the city population.
                // Note: this could be done without a transaction
                //       by updating the population using FieldValue.increment()
                
                 const newYear = parseInt(sfDoc.data().currentYear)+1 ;
                console.log(newYear)
                transaction.update(sfDocRef, { currentYear: parseInt(newYear) });
            });
        }).then(function() {
            console.log("Transaction successfully committed!");
        }).catch(function(error) {
            console.log("Transaction failed: ", error);
        });


        sfDocRef.set({
            ...marksSheet
        },{ merge: true }).then(()=>{
            console.log("Document added successfully")
            dispatch({type:'ADD_MARKS'})
        }).catch((err)=>{
            dispatch({type:'ADD_MARKS',err})
        })
     }
}
