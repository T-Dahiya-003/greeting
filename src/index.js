import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// Greeting script
const name = 'Sir';

let orginalHours = new Date();
orginalHours = orginalHours.getHours();

let greeting = '';

if (orginalHours >= 1 && orginalHours < 12) {
  greeting = 'Good Morning';
} else if (orginalHours >= 12 && orginalHours < 20) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Night 🌙';
}

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render (
  <>
    <div className="greeting__container">
      <h1 className="static__text">
        Hello {name} <span className="dynamic__text">{greeting}</span>
      </h1>
      <div className="time__container">  
        <h2 className="time">
          {currTime}
          <span className="date">{currDate}</span>
        </h2>
      </div>
    </div>
  </>,
  document.getElementById('root')
);