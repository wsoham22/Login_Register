
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/register' element ={<Signup />}></Route>
      <Route path = '/login' element ={<Login />}></Route>
      <Route path='home' element={<home />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
