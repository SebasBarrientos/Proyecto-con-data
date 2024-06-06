import './App.css'
import Chartes from './component/Chartes/Chartes'
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chartes" element={<Chartes/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
    
    
}

export default App
