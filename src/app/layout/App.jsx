import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../features/events/eventDashboard/Dashboard';
import EventDetailedPage from '../../features/events/eventDashboard/eventDetailed/Detailedpage';
import Eventform from '../../features/events/eventDashboard/eventForm/Form';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';



export default function App() {
  return (
    <> 
    <Route exact path='/' component={HomePage}/>
    <Route
    path={'/(.+)'}
    render={()=>(
      <>
      <NavBar />
      
      <Container className='main'>
        
      
     <Route exact path='/events' component={Dashboard}/>
     <Route path='/events/:id' component={EventDetailedPage}/>
     <Route path={['/createEvent',`/manage/:id`]} component={Eventform}/>
     </Container>
     </>
  
    )}
    />
    </>
    
      
    
    
      
  );
}


