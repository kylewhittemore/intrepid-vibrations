import React from "react";
import styled from "styled-components";

const NavStyles = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    overflow: hidden;
    background-color: #663399;
    z-index: 100;
    font-size: 18px;
    ul {
        margin: 10;
        padding: 0px 0px;
        list-style: none;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
    }
    li {

    }
    a {
        color: white;
        text-decoration: none;
    }
`

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#booking">Booking</a></li>
            </ul>
        </NavStyles>
    )
}

export default Nav;