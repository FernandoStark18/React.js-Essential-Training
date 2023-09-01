import "./App.css";
import { useState, useEffect } from "react";

function App({ library }) {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]); // The brackets alone means that the effect is not going to be called again after the first render. It is called the DEPENDENCY ARRAY because we can use it to define when this should be called. Should it just be called one when our component first renders or another option is we could pass in a property a state value to listen for any changes in this array

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
    </div>
  );
}

export default App;
