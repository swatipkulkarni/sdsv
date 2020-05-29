import React from 'react'
import {Link} from 'react-router-dom'

const Summary =({sem})=>{
    return(
        <div className="post-card">
              {sem && sem.map(semName=>{
                return (
                <div className="card z-depth-0" key={semName.id}>
                    <div className="card-title">{semName.name}</div>
                    <div className="card-content"><Link to={'/studentlist/'+semName.id}>{semName.name} Student List</Link></div>
                </div>
                )
            })}                        
       </div>
    )
}
export default Summary