import React from 'react'

const PassToFunction = ({passingFuncProps,name}) => {
    

    return (
        <>
        <div>My name is rohit verma</div>
        <button onClick={() => passingFuncProps(name)} >click me</button>
        </>
    )
}

export default PassToFunction