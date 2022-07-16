import './TimelineList.css'
import React from 'react'

function TimelineList() {
  return (
    <ul className='timeline-list'>
      <li className='event' data-date='1995'>
        <h3 className='event-title'>
          JavaScript was invented by Brendan Eich during his time at Netscape Communications. It was
          inspired by Java, Scheme and Self.
        </h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='1997'>
        <h3 className='event-title'>JavaScript became an ECMA standard (ECMA-262)</h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='1998'>
        <h3 className='event-title'>ECMAScript 2 was released</h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='1999'>
        <h3 className='event-title'>IE 5 was the first browser to support ES2</h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='2005'>
        <h3 className='event-title'>A paper released by Jesse James Garrett introduced Ajax</h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='2008'>
        <h3 className='event-title'>Creation of V8 - a high-performance JavaScript engine</h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='2009'>
        <h3 className='event-title'>
          The creation of Node.js sparked a significant increase in the usage of JavaScript outside
          of web browsers
        </h3>
        <p className='line'></p>
      </li>
      <li className='event' data-date='2021'>
        <h3 className='event-title'>
          There are more JavaScript code repositories than any other language, and that number is
          steadily on the rise.
        </h3>
        <p className='line'></p>
      </li>
    </ul>
  )
}

export default TimelineList
