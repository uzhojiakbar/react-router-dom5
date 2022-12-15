import React from 'react'
import { Container, NavbarLink } from './style'

const Navbar = () => {
  return (
      <Container>
      <NavbarLink activeStyle={{background:'white',color:'black',boxShadow: '0px 2px 40px white'}} to={'/Home'}>Home</NavbarLink>
      <NavbarLink activeStyle={{background:'white',color:'black',boxShadow: '0px 2px 40px white'}} to={'/Students'}>Students</NavbarLink>
      <NavbarLink activeStyle={{background:'white',color:'black',boxShadow: '0px 2px 40px white'}} to={'/Teachers'}>Teachers</NavbarLink>
      <NavbarLink activeStyle={{background:'white',color:'black',boxShadow: '0px 2px 40px white'}} to={'/About'}>About</NavbarLink>
      </Container>
  )
}

export default Navbar