import Router from "./router";
import { createContext, useState } from "react";
import { truckDB } from "./assets/truckDB";

export const MyContext = createContext();
function App() {

  const [trucks,setTrucks] = useState(truckDB);
  
  return (
    <MyContext.Provider value={{
      trucks,
      setTrucks
    }}>
      <Router />
    </MyContext.Provider>
  );
}

export default App;
