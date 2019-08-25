import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Generos from './components/Generos'
import NovoGenero from './components/NovoGenero'
import EditarGenero from './components/EditarGenero'


const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  
  return (
    <Router>
      <div >
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/:id' exact component={EditarGenero} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/generos/novo' exact component={NovoGenero} />
      </div>    
    </Router>
  )
}

export default App;
