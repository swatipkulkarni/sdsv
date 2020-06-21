const initState= {
    authError:""
}
const authReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_FAILED':
            console.log("Login failed")
            return{
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("Login success")
            return{
                ...state,
                authError:null
            }
        case 'LOGOUT_SUCCESS':
            console.log("Logout success")
            return state
        case 'SIGNUP_SUCCESS':
            console.log("SignUp success")
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_FAILED':
            console.log("Sign up failed")
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
}

export default authReducer