import React from 'react'
import { Ref } from 'react'

const User = (props) => {

    console.log(props.ref)
    return (
        <>
            <input type="text" ref={props.ref} />
        </>
    )
}

export default User