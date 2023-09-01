import "./App.css";
import { useState } from "react";

function App({ library }) {
  const [emotion, setEmotion] = useState("happy");
  console.log();
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
    </div>
  );
}

export default App;
