import React from 'react';
import './App.css';
import TodoContainer from "./containers/TodoContainer";


function App() {
    // const [items, setItems] = useState([])
    // const [input,setInput] = useState("")
  return (
    <div className="App">
        <TodoContainer/>
    </div>
  );
}

export default App;
