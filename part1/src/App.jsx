import { useState } from "react";
import Unicafe from "./Unicafe";
import Anecdotes from "./Anecdotes";

function App() {
  const [display, setDisplay] = useState("unicafe");

  function handleChange(event) {
    setDisplay(event.target.value);
  }

  return (
    <>
      <form>
        <label>
          <input
            name="display"
            value="unicafe"
            type="radio"
            onChange={handleChange}
            checked={display === "unicafe"}
          />{" "}
          Unicafe
        </label>
        <label>
          <input
            name="display"
            value="anecdotes"
            type="radio"
            onChange={handleChange}
            checked={display === "anecdotes"}
          />{" "}
          Anecdotes
        </label>
      </form>

      {display === "unicafe" ? <Unicafe /> : <Anecdotes />}
    </>
  );
}

export default App;
