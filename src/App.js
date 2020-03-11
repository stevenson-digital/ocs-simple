import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import { Home } from './components/pages/Home'
import { Experience } from './components/pages/Experience'
import { Skills } from './components/pages/Skills'
import { Contact } from './components/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
