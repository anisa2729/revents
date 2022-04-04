import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../features/events/eventDashboard/Dashboard';
import EventDetailedPage from '../../features/events/eventDashboard/eventDetailed/eventDetailed';
import Eventform from '../../features/events/eventDashboard/eventForm/Form';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';



export default function App() {
  const[formOpen, setFormOpen] = useState(false);
  const[selectedEvent, setSelectedEvent]= useState(null); 

  function handleSelectEvent(event){
    setSelectedEvent(event);
    setFormOpen(true);
}
    function handleCreateFormOpen(){
      setSelectedEvent(null);
      setFormOpen(true);
    }
 
  return (
    <> 
    <Route exact path='/' component={HomePage}/>
    <Route
    path={'/(.+)'}
    render={()=>(
      <>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      
      <Container className='main'>
        
      
     <Route exact path='/events' component={Dashboard}/>
     <Route path='/events/:id' component={EventDetailedPage}/>
     <Route path='/createEvent' component={Eventform}/>
     </Container>
     </>
  
    )}
    />
    </>
    
      
    
    
      
  );
}

