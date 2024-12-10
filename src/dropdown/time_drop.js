import React from 'react';

const TimeDropdown = (props) => {
        let length = props.type === "Hour" ? 24 : 60;
    const handleChange = (event) => {
        props.setTime(event.target.value);
    };

    return (
        <select id="time" value={props.time} onChange={handleChange}>
            {/* Generate options from 00 to 24 */}
            {Array.from({ length: length + 1 }, (_, index) => {
                const timeValue = String(index).padStart(2, '0'); // Pad with leading zero  
                return (
                    <option key={timeValue} value={timeValue}>
                        {timeValue}
                    </option>
                );
            })}
        </select>

    );
};

export default TimeDropdown;