import React from 'react'

const User = ({  user}) => {

        console.log(user.name + "this" )
    
    return (
        <>
            <h1>This is a User components</h1>
            <li key={user.id}> user={user.name} </li>
        </>
    )
}

export default User