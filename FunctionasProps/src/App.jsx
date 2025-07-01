import React from 'react'
import PassToFunction from './PassToFunction'

const App = () => {
    const passingFuncProps = (name) => {
        console.log(name)
    }

    return (
        <>
            <PassToFunction passingFuncProps={passingFuncProps} name="rohit" />
            <PassToFunction passingFuncProps={passingFuncProps} name="Rahul" />
            <PassToFunction passingFuncProps={passingFuncProps} name="shuba" />
            <PassToFunction passingFuncProps={passingFuncProps} name="Pawan" />
        </>
    )
}

export default App