import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    min-width: 1440px;
    height: 80px;
    padding: 5px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `

export const NavbarLink = styled(NavLink)`
    color: white;
    font-size: 25px;
    font-weight: 900;
    font-family: sans-serif;
    text-decoration: none;
    padding: 7px 15px;
    border-radius: 25px;
    transition: .3s;
    :hover{
        background-color: white;
        color: black;
        box-shadow:0px 2px 10px white;
    }
`