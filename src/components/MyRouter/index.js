// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Contact from '../../pages/Contact'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'

// Style
import './style.scss'


function MyRouter () {
  
  return (
    <Router>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />}/>
          <Route path="/projects" element={<Projects />} errorElement={<Error />}/>
          <Route path="/contact" element={<Contact />} errorElement={<Error />}/>
          <Route path="/error" element={<Error />} errorElement={<Error />}/>
          <Route path="*" element={<Error />} errorElement={<Error />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
  
export default MyRouter