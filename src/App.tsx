import './App.css'
import React from 'react'
import TimelineList from './TimelineList'

function App() {
  return (
    <div className='timeline-content'>
      <h1 className='timeline-content__title'>JavaScript history</h1>
      <TimelineList />
    </div>
  )
}

export default App
