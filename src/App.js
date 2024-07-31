import React, { useState,useMemo } from 'react'
import './App.css'

function App() {
  const[weight,setWeight]=useState(70);
  const[height,setHeight]=useState(180);

  function onWeightChange(event){
    setWeight(event.target.value)

  }

  function onHeightChange(event){
    setHeight(event.target.value)

  }
  const output=useMemo(()=>{
    const calculateheight=height/100;
    return (weight/(calculateheight*calculateheight)).toFixed(1)
    },[weight,height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section' >
        <p className='output-slider'>Weight: {weight} KG</p>
        <input className='input-slider'
        type='range'
        step={1}
        min={40}
        max={200}
        onChange={onWeightChange}></input>

<p className='output-slider'>Height: {height} cm</p>
        <input className='input-slider'
        type='range'
        onChange={onHeightChange}
        min={140}
        max={220}></input>
      </div>
      <div className='output-section'>
        <p>Your BMI is:</p>
        <p className='output'>{output}</p>
        </div>
    </main>
  )
}

export default App