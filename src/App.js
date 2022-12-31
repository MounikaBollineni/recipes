import './App.css';
import PrimarySearchAppBar from './NavBar'
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Router>
        <Routes>
      <Route path="/login" exact element={<LoginForm/>} /> 
      <Route exact path="/signup" element={<Register/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
