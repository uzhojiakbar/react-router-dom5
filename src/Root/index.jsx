import React from 'react'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Students from '../Components/Students'
import Teachers from '../Components/Teachers'
import About from '../Components/About'
import './style.css'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
const Root = () => {
  const location = useLocation()
  console.log(location);
  return (
    <>
      <Switch>
        <Route exact path={'/'}>
          <Redirect to={'/Home'}>
          </Redirect>
        </Route>
        <Route path={'/Home'}>
          <Navbar />
        </Route>
        <Route path={'/Students'}>
          <Navbar />
        </Route>
        <Route path={'/Teachers'}>
          <Navbar />
        </Route>
        <Route path={'/About'}>
          <Navbar />
        </Route>
        {/* Not Found */}
      </Switch>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/Home'}>
          <Home />
        </Route>
        <Route path={'/Students'}>
          <Students />
        </Route>
        <Route path={'/Teachers'}>
          <Teachers />
        </Route>
        <Route path={'/About'}>
          <About />
        </Route>
        {/* Not Found */}
        <Route exact path={'*'}>
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
      <h1>We Are Here: {location.pathname} </h1>
    </>
  )
}

export default Root