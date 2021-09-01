import { useState } from 'react';
import './App.css';
function App() {

  // https://www.youtube.com/watch?v=E1E08i2UJGI
  let todoArray = [];
  const [input, setInput] = useState('');

  const changeHandler = (e) => setInput(e.target.value);

  const onSubmitData = () => {
    setInput()
  }
  
  return (
    <div className="inputContainer">
      <h2>Add ToDo list</h2>
      <br />
      <form action="" onSubmit={() => onSubmitData}>
        <input type="text" id="inputBar" placeholder="enter your toDo heading" onChange={()=> changeHandler} />
        <textarea name="" id="todoContent" cols="30" rows="5" onChange={()=> changeHandler} ></textarea>
        <button id="addButton">Add ToDo</button>
      </form>
    </div>
  )
}

export default App;
