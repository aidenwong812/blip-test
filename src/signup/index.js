import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import CustomCheckBox from '../checkbox';
import DateDrop from '../dropdown/date_drop';
import TimeDropdown from '../dropdown/time_drop';
import InputBox from '../inputbox';
import CustomButton from '../button';

export default function SignUp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname1, setFirstname1] = useState('');
  const [lastname1, setLastname1] = useState('');
  const [blip, setBlip] = useState('');
  const [startTime, setStartTime] = useState('Monday');
  const [endTime, setEndTime] = useState('Monday');
  const [startHour, setStartHour] = useState('00');
  const [startMinute, setStartMinute] = useState('00');
  const [endHour, setEndHour] = useState('00');
  const [endMinute, setEndMinute] = useState('00');
  const [startHour1, setStartHour1] = useState('00');
  const [startMinute1, setStartMinute1] = useState('00');
  const [endHour1, setEndHour1] = useState('00');
  const [endMinute1, setEndMinute1] = useState('00');

  const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_PRODUCT_API;
  const submitHandle = () => {
    const formData = {
      name, address, type, firstname, lastname, blip, startTime, endTime, startHour, startMinute, endHour, endMinute
    }

    console.log("Datas========>", formData)
    console.log("URL======>", url)
  }
  return (
    <form className='signup-part' onSubmit={submitHandle}>
      <h1>Business Sign-Up</h1>
      <div className='first-part'>
        <InputBox title="Business Name" type="text" parameter={name} setParameter={setName} />
        <InputBox title="Business Address" type="text" parameter={address} setParameter={setAddress} />
        <div className='input-box-button1'>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: "relative" }}>
            <InputBox type="text" title="Business Types" parameter={type} setParameter={setType} />
            <div style={{ position: "absolute", width: "100%", marginTop: "-10px" }}>
              <CiSearch style={{ float: "right" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid black" }}></div>
      <div className='first-part'>
        <div style={{ display: "flex", gap: "5%", width: "100%" }}>
          <InputBox title="First Name" type="text" parameter={firstname} setParameter={setFirstname} />
          <InputBox title="Last Name" type="text" parameter={lastname} setParameter={setLastname} />
        </div>
        <div style={{ display: "flex", gap: "5%", width: "100%", flexWrap: "nowrap" }}>
          <InputBox title="First Name" type="text" parameter={firstname1} setParameter={setFirstname1} />
          <InputBox title="Last Name" type="text" parameter={lastname1} setParameter={setLastname1} />
        </div>
        <div className='checkbox-part'>
          <CustomCheckBox />
        </div>
      </div>
      <div style={{ border: "1px solid black" }}></div>
      <div className='datebox'>
        <DateDrop date={startTime} setDate={setStartTime} />
        <TimeDropdown type="Hour" time={startHour} setTime={setStartHour} />
        <div style={{ fontSize: "16px" }}>: </div>
        <TimeDropdown type="Minute" time={startMinute} setTime={setStartMinute} /> <br /><br />
        <TimeDropdown type="Hour" time={startHour1} setTime={setStartHour1} />
        <div style={{ fontSize: "16px" }}>: </div>
        <TimeDropdown type="Minute" time={startMinute1} setTime={setStartMinute1} />
        <CustomButton width="150px" height="60px" text=" + ADD" />
      </div>
      <div className='datebox'>
        <DateDrop date={endTime} setDate={setEndTime} />
        <TimeDropdown type="Hour" time={endHour} setTime={setEndHour} />
        <div style={{ fontSize: "16px" }}>: </div>
        <TimeDropdown type="Minute" time={endMinute} setTime={setEndMinute} /> <br /><br />
        <TimeDropdown type="Hour" time={endHour1} setTime={setEndHour1} />
        <div style={{ fontSize: "16px" }}>: </div>
        <TimeDropdown type="Minute" time={endMinute1} setTime={setEndMinute1} />
        <CustomButton width="150px" height="60px" text=" + ADD" />
      </div>
      <div style={{ border: "1px solid black" }}></div>
      <div className='input-box-button'>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: "5%" }}>
          <InputBox type="text" title="blipblipblip" parameter={blip} setParameter={setBlip} />
          <CustomButton width="20%" height="60px" text="blipblip" />
        </div>
      </div>
      <div style={{ width: '100%', justifyContent: 'start', display: 'flex', marginTop: "-50px" }}>
        <CustomCheckBox />
      </div>
      <CustomButton width="100%" height="60px" text="Submit" type="submit" />
    </form>
  )
}
