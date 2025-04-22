import React, { useState } from 'react'
import './App.css'
import Box from './Components/Box/Box.jsx'
import BmiDisplay from './Components/BmiDisplay/BmiDisplay.jsx'
import BmiTable from './Components/BmiTable/BmiTable.jsx'


function App() {
  const [bmi, setBmi] = useState(0)
  const [bmiPercent, setBmiPercent] = useState(0)
  const [msgReview, setMsgReview] = useState("")

  return (
    <>
      <div className="MainContainer">
        <div style={{
          display: 'flex',
          gap: '120px'
        }}>
          <Box setBmi={setBmi} setBmiPercent={setBmiPercent} setReview={setMsgReview} />
          <BmiDisplay finalResult={bmi} BmiPercentage={bmiPercent} review={msgReview} />
        </div>
        <div className='bmiTable' style={{
          width: '100%',
          display: 'grid',
          alignContent: 'start'
        }}>
          <BmiTable />
        </div>
      </div>

    </>
  )
}

export default App
