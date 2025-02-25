
import HomePage from './Components/HomePage'
import ExplorePage from './Components/ExplorePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'

function App() {


  return (
    <>
      
      <Router>
        
        <Routes>
          
        <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<ExplorePage />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
