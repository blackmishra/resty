import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

function TimePickerComp({setFromTime}) {
  var [hour, setHour] = useState('10');
  const [min, setMin] = useState('00');
  const [ampm, setAMPM] = useState('AM');

  var slot_time = ''
  var temp=''

  const handleHourChange = (e) => {
    setHour(e.target.value);
  };
  const handleMinChange = (e) => {
    setMin(e.target.value);
  };
  const handleAMPMChange = (e) => {
    setAMPM(e.target.value);
    if (e.target.value=='pm') {
      hour  = Number(hour) + 12
      hour = '' + hour
      setHour(hour);
    }
  };
  slot_time = hour + ':' + min
  setFromTime(slot_time);
  

  return (
    <div class="flex justify-center" >
      <div class=" p-2 w-70 bg-white outline-none rounded-lg shadow-l">
        <div class="flex">
          <select
            name="hours"
            class="bg-transparent text-m appearance-none outline-none"
            onChange={handleHourChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <span class="text-xl mr-3"></span>
          <select
            name="minutes"
            class="bg-transparent text-m appearance-none outline-none mr-4"
            onChange={handleMinChange}
          >
            <option value="0">00</option>
            <option value="30">30</option>
          </select>
          <select
            name="ampm"
            class="bg-transparent text-m appearance-none outline-none"
            onChange={handleAMPMChange}
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TimePickerComp;