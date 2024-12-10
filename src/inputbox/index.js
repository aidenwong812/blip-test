import React, { useState } from 'react'

export default function InputBox(props) {
    const [isChange, setIsChange] = useState(false);
    return (
        <div className='input-box'>
            <label htmlFor={props.title} style={{paddingBottom:"10px"}}>{props.title}</label>
            <input type={props.type} placeholder={props.title} style={{ paddingLeft: "15px", fontSize:"20px" }} name={props.title} onChange={(e) => { props.setParameter(e.target.value); setIsChange(true) }} />
            {
                (isChange && props.parameter === '') ? <p className='error'>{props.title} must be set</p> : <p/>
            }
        </div>
    )
}
