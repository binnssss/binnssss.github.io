import React from 'react';
import './App.scss';
import Routing from './routes/Routes';

function App() {
  return (
    <div className='App'>
      <nav>
          { /* Nav Links */ }
          <ul className='no-bullet'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#profile'>Profile</a>
            </li>
            <li>
              <a href='#work'>Work</a>
            </li>
          </ul>
      </nav>

      <Routing />
    </div>
  );
}

export default App;
