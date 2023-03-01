import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Coin Flipper!</h1>
      <Flip />
    </div>
  );
}

export default App;

// Flip Function

//I AM MAKING A CHANGE

function Flip() {
  // Declare 3 state variables and state setter functions:

  // The first keeps track of the coin landing on heads.
  // It should be initially set to 0.
  // Add your code here!
  let [headsCount, setHeadsCount] = useState(0);

  // The next should do the same but with tails.
  // It should also initially be set to 0.
  // Add your code here!
  const [tailsCount, setTailsCount] = useState(0);
  // Lastly, set the initial state for the coin side.
  // Call the state variable coinSide
  // Add your code here!
  const [coinSide, setCoinSide] = useState("heads");

  function flipCoin() {
    // Math.random generates a random number greater than 0 and less than 1
    let flip = Math.random();
    if (flip < 0.5) {
      flip = "heads";
      // Increase the heads count every time the coin lands on heads
      setHeadsCount(headsCount + 1);
      // Set coinSide to heads so the coin image changes accordingly
      setCoinSide(flip); //uses the variable to set the value
    } else {
      flip = "tails";
      // Increase the tails count every time the coin lands on tails
      setTailsCount(tailsCount + 1);
      // Set coinSide to tails so the coin image changes accordingly
      setCoinSide("tails"); //uses a literal string to set the value
    }
  }

  return (
    <div>
      <div className="coin">
        {/* Uncomment lines 30-37 when finished! */}
        {/* <img
          src={
            coinSide === "heads"
              ? "https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-general-george-washington-crossing-the-delaware-quarter-uncirculated-obverse-philadelphia-768x768.jpg"
              : "https://jeremythemagician.com/wp-content/uploads/2012/11/Quarter_new.jpg"
          }
          alt="Coin"
        /> */}
      </div>
      {/* Write an event handler to flip the coin!  */}
      <button>Click to flip!</button>
      {/* Count how many times the coin has landed on heads */}
      {/* Change 0 to the heads count state variable  */}
      <p>Heads: {0}</p>
      {/* Count how many times the coin has landed on tails */}
      {/* Change 0 to the tails count state variable  */}
      <p>Tails: {0}</p>
    </div>
  );
}
