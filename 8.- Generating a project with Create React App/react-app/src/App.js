import "./App.css";

const [firstCity, secondCity, thirdCity] = ["Tokyo", "Tahoe City", "Bend"];

console.log(thirdCity);

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
