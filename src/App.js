import { useState } from 'react';
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <Router>
      <Navbar title="TextFun" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About />}/>
           
          <Route exact path="/" element={<Textfrom showAlert={showAlert} heading="Enter your text to analyze.." mode={Mode} />}/>
        </Routes>
      </Router>
  );
}

export default App;
