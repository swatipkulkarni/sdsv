import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours=["red","yellow",'blue','green','orange','violet']
    const randomColor=colours[Math.floor(Math.random()*5)]
    const className=randomColor+'-text'

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow