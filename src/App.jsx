import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Location from './Pages/Location'
import Navbar from './Components/Navbar'
import Prices from './Pages/Prices'
import Appointment from './Pages/Appointment'
import './index.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/location" element={<Location />} exact />
          <Route path="/prices" element={<Prices />} exact />
          <Route path="/appointment" element={<Appointment />} exact />
        </Routes>     
      </BrowserRouter>
    </div>
  )
}

export default App
