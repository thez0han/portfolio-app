import React from "react";
import './Navbar.css';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    Colors,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const NavbarComponent = () => {
    return (
            <Navbar className= "bp4-navbar">
                <NavbarGroup align={Alignment.RIGHT}>
                    <NavbarHeading>Johann</NavbarHeading>
                    <NavbarDivider />
                    <Link to="/projects">
                        <Button className="bp4-minimal" icon="Code" text="Projects" />
                    </Link>
                    <Link to="/philosophy">
                        <Button className="bp4-minimal" icon="document" text="Philosophy" />
                    </Link>
                </NavbarGroup>
            </Navbar>

            
    )

    

}
export default NavbarComponent