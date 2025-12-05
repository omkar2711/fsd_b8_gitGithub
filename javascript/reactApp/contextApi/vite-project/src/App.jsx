import { useState } from 'react'
import './App.css'
import { CounterProvider } from './counterContext';
import Component1 from './components/Component1';
import CounterButtons from './components/CounterButtons';

function App() {


  return (
    <CounterProvider >
      <div>
        <p>asdas</p>
        <Component1/>
        <CounterButtons/>
      </div>
    </CounterProvider>
  )
}

export default App
