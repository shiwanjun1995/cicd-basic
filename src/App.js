import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState 钩子来管理当前时间 currentTime 的状态
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  // useEffect 钩子来启动一个每隔一秒更新一次状态的定时器
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br/>
          <strong style={{color: "pink"}}>Right now: {currentTime}</strong>
        </a>
      </header>
    </div>
  );
}

export default App;
