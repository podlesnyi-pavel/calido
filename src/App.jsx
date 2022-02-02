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
    console.log(e);
    e.preventDefault();
    const { value } = e.target;

    if (!isNaN(+value) && e.nativeEvent.data !== ' ') {
      setValue(value);
    }
  };

  const updateArr = () => {
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
      <Table arr={arr} />
    </div>
  );
}

export default App;
