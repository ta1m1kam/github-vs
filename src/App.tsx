import './App.css'
import { Paper } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Battle from './pages/Battle'
import Result from './pages/Result'

const App = () => {
  return (
    <div className="App">
      <Paper>
        <Routes>
          <Route path="/" element={<Battle />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Paper>
    </div>
  )
}

export default App
