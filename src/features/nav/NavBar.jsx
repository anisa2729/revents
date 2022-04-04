import React,{useState} from "react";
import logo from "../../assest/scout.jpeg"
import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar({setFormOpen}){
    const history= useHistory();
    const[authenticated, setAuthenticated]= useState(false);

    function handleSignOut(){
        setAuthenticated(false);
        history.push('/');
    }
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
                {authenticated ? 
                <SignedInMenu  signOut={handleSignOut}/> : 
                <SignedOutMenu setAuthenticated={setAuthenticated}/>}
                
            </Container>
            </Menu>
    )

}