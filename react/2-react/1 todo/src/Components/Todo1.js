import react from "react";
import { useState } from "react";

const App=()=>{

  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent = (event)=>{
    listOfItems()
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
  };

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input ype="text" placeholder="Add item" onChange={itemEvent} />
        {/* onChange={itemEvent} */}
        <button onClick={listOfItems}>+</button>  
        {/* onClick={listOfItems} */}

        <ol>
          {/* <li>input data</li> */}

          {
            Items.map((itemval)=>{
              return <li>{itemval}</li>;
            })
          }

        </ol>
      </div>
    </div>
    </>
  );
};

export default App;