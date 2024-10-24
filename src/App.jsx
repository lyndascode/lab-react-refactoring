import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    )
  }
}

export default App
