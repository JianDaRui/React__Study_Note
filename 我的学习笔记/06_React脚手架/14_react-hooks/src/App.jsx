import React, { Component, useState, createContext  } from 'react';

// import CounterClass from './01_体验Hooks/01_counter-class'
import CounterHook from './01_体验Hooks/02_counter-hook'
import MultiHook from './02_useState的使用/01_多个状态的使用';
import MultiHook2 from './02_useState的使用/02_复杂状态的修改';
import Hook3 from './03_useEffect/02_hook实现title的修改';
import CancelDemo from './03_useEffect/03_模拟订阅与取消';
import ContextHookDemo from './04_useContext/01_useContext的使用'

export const UserContext = createContext();
export const TokenContext = createContext();

export const ThemeContext = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        {/* <CounterClass></CounterClass> */}
        {/* <CounterHook></CounterHook>
        <MultiHook></MultiHook>
        <MultiHook2></MultiHook2> */}
        {/* <Hook3></Hook3>
        <CancelDemo></CancelDemo> */}

        {/* 4.useContext */}
      <UserContext.Provider value={{name: "why", age: 18}}>
        <ThemeContext.Provider value={{fontSize: "30px", color: "red"}}>
          <ContextHookDemo/>
        </ThemeContext.Provider>
      </UserContext.Provider>
      </div>
    );
  }
}

export default App;
