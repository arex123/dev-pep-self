import './App.css';
import Signup from './Components/Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
     <BrowserRouter>     
      <Routes>
      <Route path="/" element={<Login/>}  />
      <Route path="/signup" element={<Signup/>}/>
      </Routes>  
      {/* <Login/> */}
      {/* <Signup/> */}
     </BrowserRouter>
  );
}

export default App;
