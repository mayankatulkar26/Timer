import Timer from './Components/Timer'
import './App.css'
import { useState } from 'react';


function App() {
    const [showtimer, setShowtimer] = useState(false);

     const toggleBtnStyle = {
    marginTop: "20px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
    background: "linear-gradient(135deg, #ff6a00, #ee0979)", // orange → pink
    color: "white",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease"
  };

  return (

    <>
    <div>
    {showtimer && <Timer />}
      <button style={toggleBtnStyle} onClick={() => setShowtimer(!showtimer) }>
        {showtimer ? "Hide Timer" : "show timer"}
      </button>
    </div>
    </>
  )
}

export default App
