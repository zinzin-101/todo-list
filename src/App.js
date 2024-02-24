import React, {useState} from "react";

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addItem = (item) => {
    const newItem = { // json object
      id: Math.random(), //random key for mapping
      item: item
    };
    
    setList([...list, newItem]); //add item to the list, the '...' means append
    setInput(""); //clear input box
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id); //create a new list that filters out an item with the input id
    setList(newList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} //listen for input and update setInput
      />
      <button onClick={() => addItem(input)}>Add</button>
      <ul>
        {
          list.map((item) => (
            <li key={item.id}>
              {item.item}
              <button onClick={() => deleteItem(item.id)}>&times;</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;