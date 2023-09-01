import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("");
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        aceholder="color tittle..."
      ></input>
      <input
        value={color}
        type="color"
        onChange={(event) => setColor(event.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}

export default App;
