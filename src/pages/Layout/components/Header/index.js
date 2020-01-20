import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from './assets/logo.png';
import avatar from './assets/avatar.png';
import { MENU } from './constants';
import './styles.scss';

export default () => (
    <div className='wraper'>
        <Navbar bg='dark' expand='lg' variant="dark">
            <div className='container'>
                <Navbar.Brand href='/' className='logo'>
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        {MENU.map(({ name, url }) => (
                            <NavLink className='navLink mr-5 text-uppercase' key={url} to={url}>
                                {name}
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Button className='avatar' variant='secondary'>
                    <img src={avatar} alt='avatar' />
                    Kanlee
                </Button>
            </div>
        </Navbar>
    </div>
);