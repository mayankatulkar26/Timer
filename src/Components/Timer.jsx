import { useState, useEffect, useRef } from "react";
import './Timer.css'

function Timer() {
  const [time, setTime] = useState(0);
 const [minutes, setMinutes] = useState("");
  const handleID = useRef(null);

  const getval = (val) =>{
    return val<10 ? `0${val}` : val ;
  };

  const displayTimer = (timeinSec) =>{
    const hr = Math.floor (timeinSec /3600);
    const mn = Math.floor ((timeinSec %3600)/60);
    const sec = Math.floor (timeinSec %60);

    return ` ${getval(hr)}:${getval(mn)}:${getval(sec)}`
  }

  const handleStart = () =>{
    console.log("hello from useEffect");
     handleID.current = setInterval(() => {
      console.log("hello from timer", handleID.current);
      setTime((value) => {
        if (value == 0) {
          clearInterval(handleID.current);
          return 0;
        }else{
            return value - 1;
        }
      });
    }, 1000);
  };

  const handleStop= () =>{
    clearInterval(handleID.current);
    handleID.current=null;
  }

  const handleReset= () =>{
    handleStop();
    setTime(0)
  };

  const handleMinutesChange = (e) => {
    const val = e.target.value;
    setMinutes(val);             
    setTime(val * 60);           
  };


  useEffect(() => {
return handleStop;

  }, []);

  return (
    <div className="timer-container">
    <label htmlFor="time">Give Time in Minutes : </label>
    <input
        type="number"
        placeholder="Enter minutes"
        value={minutes}
        onChange={handleMinutesChange}

        id="time"
      />

      <h1>Time: {displayTimer(time)}</h1>
      <div  >
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
      </div>
  );
}

export default Timer;
