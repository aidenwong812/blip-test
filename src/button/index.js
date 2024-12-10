import React from 'react'

export default function CustomButton(props) {
  return (
    <button className='custom-button' type = {props.type} style={{width: props.width, height: props.height }}>
        {props.text}
    </button>
  )
}
