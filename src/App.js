
import { useState } from 'react';
import './App.css';
import About from './Componenets/About'
import Navbar from './Componenets/Navbar';
import Alert from './Componenets/Alert';
import TextForm from './Componenets/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = "#010049";
      document.body.style.backgroundColor = "#1e2952";
      showAlert("Dark mode has been enabled", "success");

      setInterval(() => {
        // document.title = "Textutial App";
      }, 2000);
      setInterval(() => {
        // document.title = "Install";
      }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title="Textutial" aboutext="About Textutial"/> */}
      <Router>
        <Navbar title="Textutial" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Try TextYtils-Word counter,Remove counter,Remove extra spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}



