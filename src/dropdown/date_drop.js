import React from 'react'

export default function DateDrop(props) {
  const handleChange = (event) => {
    props.setDate(event.target.value);
  };
  return (
    <select id="days" value={props.date} onChange={handleChange}>
      <option value="monday">Monday</option>
      <option value="tuesday">Tuesday</option>
      <option value="wednesday">Wednesday</option>
      <option value="thursday">Thursday</option>
      <option value="friday">Friday</option>
    </select>
  )
}
