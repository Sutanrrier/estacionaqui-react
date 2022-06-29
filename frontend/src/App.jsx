import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="teste">Teste</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default App;
