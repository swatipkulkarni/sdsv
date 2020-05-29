const initState= {
    students:[
        {studentid:'1', name:"Swati",  currentyear:"1", marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'2', name:"Satya",  currentyear:"2", marksSheet :[{ year:"1", marks:"35"},{ year:"2", marks:"48"}]},
        {studentid:'3', name:"Anjana", currentyear:"3",  marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'4', name:"Manchali",  currentyear:"1", marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'5', name:"Prahalad",  currentyear:"2", marksSheet :[{ year:"1", marks:"35"},{ year:"2", marks:"48"}]},
        {studentid:'6', name:"Jyoti", currentyear:"3",  marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'7', name:"Krishna",  currentyear:"1", marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'8', name:"Shweta",  currentyear:"2", marksSheet :[{ year:"1", marks:"35"},{ year:"2", marks:"48"}]},
        {studentid:'9', name:"Tejas", currentyear:"3",  marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:'10', name:"Sanjeev",  currentyear:"1", marksSheet :[{ year:"1", marks:"30"}]},
        {studentid:"11", name:"Hanamesh",  currentyear:"2", marksSheet :[{ year:"1", marks:"35"},{ year:"2", marks:"48"}]},
        {studentid:'12', name:"Revati", currentyear:"3",  marksSheet :[{ year:"1", marks:"30"}]}
    ],
    year:[
        {id:1,name:"Dasa"},
        {id:2,name:"Dasa Shree"},
        {id:3,name:"Dasa Nidhi"}
    ]
}
const studentReducer = (state=initState, action)=>{
    switch(action.type){
        case 'ADD_STUDENT':
            console.log("student added",action.student)
            return state
        case 'ADD_STUDENT_ERROR':
            console.log("error occured",action.err)
            return state;
        default:
            return state
        }
}

export default studentReducer