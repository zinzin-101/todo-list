import React, {useState} from "react";
import "./App.css"

function App() {

  const [itemList, setList] = useState([]);
  const [input, setInput] = useState("");

  React.useEffect(() => {
    const jsonFile = localStorage.getItem("todo-list");
    const parsedJson = JSON.parse(jsonFile);

    console.log("start");

    if (parsedJson){
      setList(parsedJson);
    }
  }, [])

  React.useEffect(() => {
    const jsonFile = JSON.stringify(itemList);
    console.log("loaded");
    localStorage.setItem("todo-list", jsonFile);
  }, [itemList])

  const addItem = (item) => {
    if (item === "") return;
    const newItem = { // json object
      id: Math.random(), //random key for mapping
      item: item
    };
    
    setList([...itemList, newItem]); //add item to the list, the '...' means append
    setInput(""); //clear input box
  };

  const deleteItem = (id) => {
    const newList = itemList.filter((item) => item.id !== id); //create a new list that filters out an item with the input id
    setList(newList);
  }

  return (
    <div>
      <h1><span id="header">Stylish</span><br></br>Todo<span id="textgradient">List</span></h1>
      <input id="inputbox" type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} //listen for input and update setInput
      />
      <button id="addbutton" onClick={() => addItem(input)}>Add</button>
      <ul id="itemcontainer">
        {
          itemList.map((item) => (
            <ul id="itembox" key={item.id}>
              {item.item}
              <button id="removebutton" onClick={() => deleteItem(item.id)}>&times;</button>
            </ul>
          ))
        }
      </ul>
    </div>
  );
}

export default App;