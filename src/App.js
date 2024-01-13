import logo from './logo.svg';
import './App.css';

import Dashboard from './admin/Dashboard';
import Login from './user/Login';
import QuestionSet from './user/QuestionSet';
import Home from './user/Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
      <Route path="/question" element={<QuestionSet />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
