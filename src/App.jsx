import './App.css'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './component/Register'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </>
  ) 
}
import { Form } from 'react-router-dom'

export default App