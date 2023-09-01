import "./App.css";
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" aceholder="color tittle..."></input>
      <input {...colorProps} type="color"></input>
      <button>ADD</button>
    </form>
  );
}

export default App;
