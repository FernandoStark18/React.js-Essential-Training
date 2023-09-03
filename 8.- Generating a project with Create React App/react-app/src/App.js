import "./App.css";
import { useState, useEffect } from "react";

function GithubUSer({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/FernandoStark18")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data)
    return (
      <GithubUSer
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
  return <h1>{data}</h1>;
}

export default App;
