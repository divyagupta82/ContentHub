
import HomePage from './Components/HomePage'
import ExplorePage from './Components/ExplorePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './Components/Form'

function App() {


  return (
    <>
      
      <Router>
        
        <Routes>
          
        <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<ExplorePage />} />
          <Route path="/login" element={<Form />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
