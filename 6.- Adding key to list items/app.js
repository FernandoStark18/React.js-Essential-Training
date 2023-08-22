function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.tittle}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Salmon and Potatoes",
  "Mexican Pizza",
];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  tittle: dish,
}));

function App() {
  return (
    <div>
      <Header name="Fernando" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
