import React from 'react'

const InputAuth = (props: any) => {
    return (
        <div>
            <input type={props.type ? props.type : "text"} 
            placeholder={props.placeholder} className="inputAuth" />
        </div>
    )
}

export default InputAuth