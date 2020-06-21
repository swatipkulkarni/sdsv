export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_FAILED'})
        })
    }
}

export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
            ).then((resp)=>{
                console.log("response",resp)
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.firstName,
                initials:newUser.firstName[0]+newUser.lastName[0]
                //fullName:newUser.firstName+' '+newUser.lastName
            })
        }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            }).catch((err)=>{
                dispatch({type:'SIGNUP_FAILED',err})
            })
    }
}