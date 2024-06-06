import './App.css'
import Chartes from './component/Chartes/Chartes'
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import { BrowserRouter,Routes, Route } from "react-router-dom";


const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 80 },
  { name: 'C', value: 45 },
  { name: 'D', value: 60 },
  { name: 'E', value: 20 },
  { name: 'F', value: 90 },
  { name: 'G', value: 55 },
];

function App() {
  

  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chartes" element={<Chartes  data={data}/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
    
    
}

export default App
