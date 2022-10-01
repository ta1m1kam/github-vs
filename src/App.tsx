import './App.css'
import { Paper } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Battle from './pages/Battle'

const App = () => {
  return (
    <div className="App">
      <Paper>
        <Routes>
          <Route path="/" element={<Battle />} />
        </Routes>
      </Paper>
    </div>
  )
}

export default App
