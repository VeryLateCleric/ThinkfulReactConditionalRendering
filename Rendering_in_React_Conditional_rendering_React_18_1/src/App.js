import React from "react";
import Clock from "./Clock";

function App({ loggedIn }) {
  return loggedIn ? <Clock /> : null
  // Write your code here.
  // Hint: It's not necessary to pass props to clock as an argument.
  
}

export default App;
