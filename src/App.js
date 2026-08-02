import './App.css';
import TextArea from './components/TextArea';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

// 1. CHANGED: Imported HashRouter instead of BrowserRouter
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeTheme = (colorHex) => {
    document.body.style.backgroundColor = colorHex;
    
    if (colorHex === '#ffffff') {
      setMode('light');
      showAlert("Light Theme Applied", "success");
      // document.title = "TextUtils - Light Mode";
    } else {
      setMode('dark');
      showAlert("Dark Theme Applied", "success");
      // document.title = "TextUtils - Custom Theme";
    }
  };

  // const togglemode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been Enabled", "success");
  //     // document.title = "TextUtils - Dark Mode";
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been Enabled", "success");
  //     // document.title = "TextUtils - Light Mode";
  //   }
  // };

  return (
    <> 
      {/* 2. Using the HashRouter (still called <Router> because of our import alias) */}
      <Router>
        <Navbar title="Textutils" homeText="Home" aboutText="About" mode={mode}  changeTheme={changeTheme} />
        
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextArea heading="TextUtils-Convert to upperCase,lowerCase,copy,etc" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

