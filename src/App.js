import React from "react";
import HelloWorld from './Component/HelloWorld.tsx';
import Form from './Component/Form.tsx';
import Timer from './Component/Timer.tsx'
import './App.css';
import Format from './Container.json'
// import KeyList from './Component/KeyList.tsx';

// const numbers = [1, 2, 3, 4, 5];
console.log()
function App() {

  return <div className="App">
    <header className="App-header">
      <div className="App-text-center">
        {/* <KeyList numbers={numbers} /> */}
        <HelloWorld name={Format.time} />
        <Timer/>
        <Form />
      </div>
    </header>
  </div>
}

export default App;

