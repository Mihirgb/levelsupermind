import './App.css'
import { LandingPage } from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './components/ChatBot.jsx'
import NewBot from './components/NewBot.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newbot" element={<NewBot />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
