import React from 'react'
import './App.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber, inceNumber, deceNumber} from './actions/index'

const App = () => {
  const myState=useSelector((state)=> state.changeTheNumber);
  const myStates=useSelector((state)=> state.changeTheNumbers);
  const dispatch=useDispatch();
  return (
    <>
    <div className='App'>
    <h1 className='App-header'>Redux Example</h1>
    <h4>Increment/Decrement One Time</h4>
    <button className='Button' onClick={()=>dispatch(incNumber())}> + </button>
    <input className='Input' type="text" value={myState} ></input>
    <button className='Button' onClick={()=>dispatch(decNumber())}> - </button>
    <br/>
    <h4>Increment/Decrement Five Times</h4>
    <button className='Button'onClick={()=>dispatch(inceNumber(5))}> + </button>
    <input className='Input' type="text" value={myStates} ></input>
    <button className='Button' onClick={()=>dispatch(deceNumber(5))}> - </button>
    </div>
    </>
  )
}
export default App  