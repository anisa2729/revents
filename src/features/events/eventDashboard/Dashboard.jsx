import React, {useState}from 'react';
import { Grid } from 'semantic-ui-react';
import Eventform from './eventForm/Form';
import List from './List';
import { sampleData } from '../../../app/api/sampledata';
 
export default function Dashboard({formOpen, setFormOpen, selectEvent,selectedEvent}){
    // useState, useEffect, useParams, useNavigate, useSelector, useDispatch
  
    // const [a,b] = [1,2];
    const[events, setEvents]= useState(sampleData);
    
    function handleCreateEvent(event){
        setEvents([...events, event])
       
    }
    function handleUpdateEvent(updatedEvent){
        setEvents(events.map(evt=> evt.id=== updatedEvent.id ? updatedEvent: evt));
        selectEvent(null);
      
    }
    function handleDeleteEvent(eventId){
        setEvents(events.filter(evt => evt.id !== eventId));
    }
   
    return (
        <Grid>
           <Grid.Column width={10}>
           <List events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
            {formOpen &&
        <Eventform setFormOpen={setFormOpen} setEvents={setEvents} 
        createEvent={handleCreateEvent}
        selectedEvent={selectedEvent}
        updateEvent
        key={selectedEvent ? selectedEvent.id : null }
        /> 
            }
        </Grid.Column>
        </Grid>
    );
}
 