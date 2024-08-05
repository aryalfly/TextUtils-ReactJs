import "./App.css";
import About from "./Components/About";
import TextFrom from "./Components/TextFrom";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App () {
  const[mode, setMode] = useState('light'); // whether dark mode enabled or not
  const[alert, setAlert] = useState(null);
   
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","sucess");
    // document.title = 'TextUtils - Dark Mode';
    // setInterval(()=>{
    //   document.title = 'TextUtis is Amazing Mode';
    // },2000);
    // setInterval(()=>{
    //   document.title = 'Install TextUtils Now';
    // },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","sucess");
    // document.title = 'TextUtils - Light Mode';
  }

  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}> 
        </Route>
          <Route exact path="/" element={
            <TextFrom showAlert={showAlert} heading="Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>
             }>  
          </Route>
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
