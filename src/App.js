import { useEffect, useState, useRef } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function App() {
  const getItemsInLocalStorage = () =>{
    if(localStorage.getItem('todos')) return JSON.parse(localStorage.getItem('todos'));
    else return []
  }
  const [input, setInput] = useState('');
  const [items, setItems] = useState(getItemsInLocalStorage());
  const [activeClass, setActiveClass] = useState(false);
  const [editItem, setEditItem] = useState(-1);
  const [currentEditedValue, setCurrentEditedValue] = useState('');
  const nativeEle = useRef(null);

  useEffect(()=>{
    nativeEle?.current?.focus();
  },[editItem])

  const pushItem = () => {
    if(input === '') {
      setActiveClass(true)
    } else {
      setItems([input,...items]);
      setItemsInLocalStorage([input,...items])
      setInput('');
      setEditItem(-1)
      setActiveClass(false)
    }
  }
  const deleteHandler = (id) => {
    const deletedItem = items.filter((list, index) => index !== id )
    setItems(deletedItem);
    setItemsInLocalStorage(deletedItem);
  }

  const editHandler = (ind) => setEditItem(ind);
  const updateItem = (ind) => {
    const todos = items;
    todos[ind] = currentEditedValue
    setItems(todos)
    setItemsInLocalStorage(todos)
    setEditItem(false)
  }
  
  const cancelHandler = (item) => setEditItem(-1)
  const changeTodo = (value) => setCurrentEditedValue(value)
  const setItemsInLocalStorage = (items)=> localStorage.setItem('todos', JSON.stringify(items));
  
  return (
    <section className="todoSection">
      <div className="todoSubContainer">
        <h1>Add your ToDo List</h1>
        <div className={activeClass ? "inputBlock active" : "inputBlock"}>
          <input type="text" className={activeClass ? "active" : ''} placeholder="Enter you ToDo content" onChange={(e) => setInput(e.target.value)} value={input} />
          <button className="addButton" onClick={()=> pushItem()}>Add Item</button>
        </div>
        <ul className="todoListItems p-0">
          {
            items.map((item, ind) => {
              return <li className={editItem === ind ? "todoItem active" : "todoItem"} key={ind}>
                  {
                    editItem === ind ? <input type="text" ref={nativeEle} defaultValue={item} onInput={(e) => changeTodo(e.target.value)} />
                    : <p className="mb-0">{item}</p>
                  }
                  {
                    editItem === ind ? <div className="d-flex">
                        <div className="cancelButton" onClick={()=> cancelHandler(ind)}>
                          <i className="fas fa-times"></i>
                        </div>
                        <div className="checkButton m-0" onClick={() => updateItem(ind)}>
                          <i className="fas fa-check"></i>
                        </div>
                    </div>
                    : <div className="d-flex">
                        <div className="editButton" onClick={()=> editHandler(ind)}>
                          <i className="fas fa-pencil-alt"></i>
                        </div>
                        <div className="deleteButton m-0" onClick={()=> deleteHandler(ind)}>
                          <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                  }
                  
              </li>
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default App;
