
import { useState } from 'react';
import './App.css';
import Aboutus from './components/About us';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Front from './components/Front';

// react router imported
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const removebg = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const EnableDM = (cls) => {
    // removebg();
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#333333";
      showAlert("Dark Mode Enabled! ", "Success : ");

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled! ", "Success : ");
    }

  }

  const EnableDBM = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "blue";
      showAlert("Dark Blue Mode Enabled! ", "Success : ");

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled! ", "Success : ");
    }

  }
  return (

    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} EnableDM={EnableDM} home="Home" aboutText="About" />
        {/* <NewNavbar/> */}
        {/* <Front/> */}
        {/* <Navbar/> */}

        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/About" element={<Aboutus button1="Step-1" button2="Step-2" button3="Step-3" mode={mode} EnableDM={EnableDM} />}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} EnableDM={EnableDM}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} EnableDM={EnableDM} /> */}



      <div>
        {/* <Aboutus button1="Step-1" button2="Step-2" button3="Step-3"/> */}
      </div>
    </>
  );
}

export default App;
