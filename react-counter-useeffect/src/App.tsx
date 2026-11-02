import { useState } from "react";

import "./App.css";
import AdvancedCounter from "./components/AdvancedCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AdvancedCounter />
    </div>
  );
}

export default App;
