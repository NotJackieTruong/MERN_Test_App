import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import UserModal from './UserModal';

const NavBar = () => {
    // function to open modal
    const [open, setOpen] = React.useState(false);
    const [index, changeIndex] = React.useState(0)

    const handleOpen = (e) => {
        setOpen(true); 
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = (e)=>{
        changeIndex(e.target.name)
  
    }
    console.log("index from navbar: ", index)
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={(event)=>{handleOpen(); handleClick(event);}} name="0">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick={(event)=>{handleOpen(); handleClick(event);}} name="1">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" onClick={(event)=>{handleOpen(); handleClick(event);}} name="2">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <UserModal open={open} onClose={handleClose} piority={index}></UserModal>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar