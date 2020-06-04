import React from 'react'
import {Link} from 'react-router-dom'

const Summary =({sem})=>{
    return (
        <div className="post-card">
            <div className="row">                               
                {sem && sem.map(semName => {
                    return (
                        <div className="col s4 m4">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{semName.name}</span>
                                </div>
                                <div className="card-action">
                                    <Link to={'/studentlist/' + semName.id}>Student List</Link>
                                    {/* <Link to={'/studyMaterial/' + semName.id}>Study Material</Link>
                                    <Link to={'/syllabus/' + semName.id}>Syllabus</Link> */}
                                </div>
                            </div>
                        </div>
                    )
               })}                 
               
            </div>
        </div>
    )
}
export default Summary