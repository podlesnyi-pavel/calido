import { useState } from "react";
import { Actions } from "./components/Actions/Actions";
import { Table } from "./components/Table/Table";

const App = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [arr, setArr] = useState([]);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateValue = (e) => {
    
    const { value } = e.target;

    if (!isNaN(+value)) {
      setValue(value);
    }
  };

  const updateArr = (e) => {
    e.preventDefault();
  
    setArr([
      ...arr,
      {
        id: arr.length++,
        name: name,
        value: value * 100
      },
    ]);

    setName('');
    setValue('');
  };

  return (
    <div className="App">
      <Actions 
        name={name}
        value={value}
        updateName={updateName}
        updateValue={updateValue}
        updateArr={updateArr}
      />
      {!!arr.length && <Table arr={arr} />}
    </div>
  );
}

export default App;
