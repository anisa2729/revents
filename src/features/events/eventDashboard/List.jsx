import React from "react";
import Listitem from "./Listitems";


export default function List({events, selectEvent,deleteEvent})
{
     return(
         <>
         {events.map(event => (
             <Listitem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />
         ))}
         
         </>
     );
} 