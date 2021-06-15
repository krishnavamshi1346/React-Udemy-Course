import React from 'react'
function Child(props)
{
    return <div>
     <h1>
        This is Child Function
    </h1>
    <h1> Game is {props.game}
    </h1>
    </div>
}
export default Child;