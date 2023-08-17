import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'

function App() {
  

  return (
    <>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

    </>
  )
}

export default App
