import React,{useState} from "react";
import logo from "../../assest/scout.jpeg"
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

export default function NavBar({setFormOpen}){
    const[authenticated, setAuthenticated]= useState(false);
    
    return(
        
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/'   header>
                    <img src={logo} alt="logo" style={{marginRight: 15}}/>
                    Revents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/events' name='Events'/>
                    {authenticated && 
                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button  positive inverted content='Create Event'/>
                </Menu.Item>}
                {authenticated ? <SignedInMenu  setauthenticated={setAuthenticated}/> : 
                <SignedOutMenu setAuthentication={setAuthenticated}/>}
                
            </Container>
            </Menu>
    )

}