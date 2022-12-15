import React from 'react'
import { Container, Navlink } from './style'

const Navbar = () => {
  return (
      <Container>
      <Navlink to={'/Home'}>Home</Navlink>
      <Navlink to={'/Students'}>Students</Navlink>
      <Navlink to={'/Teachers'}>Teachers</Navlink>
      <Navlink to={'/About'}>About</Navlink>
      </Container>
  )
}

export default Navbar