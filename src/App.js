import { useState } from 'react';
import './App.css';
function App() {

  // https://www.youtube.com/watch?v=E1E08i2UJGI
  let todoArray = [];
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const changeHandler = (e) => setInput(e.target.value);

  const pushItem = () => {
    setItems([...items, input])
    setInput('');
  }
  const deleteHandler = (id) => {
    const deletedItem = items.filter((list, index) => index !== id )
    console.log(deletedItem);
    setItems(deletedItem);
  }
  
  return (
    // <div className="inputContainer">
    //   <h2>Add ToDo list</h2>
    //   <br />
    //   <form action="" onSubmit={() => onSubmitData}>
    //     <input type="text" id="inputBar" placeholder="enter your toDo heading" onChange={(e)=> setInput(e.target.value)} />
    //     <textarea name="" id="todoContent" cols="30" rows="5" onChange={()=> changeHandler} ></textarea>
    //     <button id="addButton">Add ToDo</button>
    //   </form>
    // </div>
    <section className="todoSection">
      <div className="todoSubContainer">
        <h1>Add your ToDo List</h1>
        <div className="inputBlock">
          <input type="text" placeholder="Enter you ToDo content" onChange={(e) => setInput(e.target.value)} value={input} />
          <button className="addButton" onClick={()=> pushItem()}>Add Item</button>
        </div>
        <ul className="todoListItems">
          {
            items.map((item, ind) => {
              return <li className="todoItem" key={ind}>
                <p>{item}</p>
                <div className="deleteButton" onClick={()=> deleteHandler(ind)}>
                  <i className="fas fa-trash"></i>
                </div>
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default App;
