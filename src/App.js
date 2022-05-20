import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';

import { useState } from "react";

function App() {

  const [validUser, setValidUser] = useState(false);

  function callLogin() {
    setValidUser(true);
  }

   return (
   <>
    {validUser == true && <Home />}
    {validUser == false && <Login callLogin={callLogin} />}
  </>
  );
}


export default App;
