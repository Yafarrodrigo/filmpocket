import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {
  

  return (
    <>
    <Header />
    <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

    </>
  )
}

export default App
