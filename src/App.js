import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wether darkmode is enabled ot not
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) =>
  {
    setAlert({
      msg:message, type:type
    })
    setTimeout(()=>{
      setAlert(null);
      
    }, 3000);
  }
  const toggleMode = () => {
    if(mode === 'light' ){
      setMode('dark')
      document.body.style.backgroundColor = "#212529"
      ShowAlert("Dark Mode has been enabled", "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      ShowAlert("Light Mode has been enabled", "success");
    }

  }

  return (
    <>
      <Router>  
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode = {mode} ShowAlert = {ShowAlert}/>}/>
            <Route exact path='/' element={<TextForm heading = "Enter the text to Analyze" mode = {mode} ShowAlert = {ShowAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;