import React from 'react';
import { Link } from 'react-router-dom';
import { Segment,Image,Item,Header,Button } from 'semantic-ui-react';

const eventImageStyle = {
    filter: 'brightness(70%)'
    
    };
    
    const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
    };


export default function DetailedHeader(){
    return(
        <Segment.Group>
<Segment basic attached="top" style={{padding: '0'}}>
<Image src={`https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/87071224_10215840927791403_995882901671247872_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=0nTqH6tqlvAAX9-YyDl&_nc_ht=scontent.fktm6-1.fna&oh=00_AT8-EBBxQUki1PfKF-xvLJ0YqNcOg92zVkpcNcjsLTsMqg&oe=626FFBC3`} fluid  style={eventImageStyle}/>

<Segment basic style={eventImageTextStyle}>
<Item.Group>
<Item>
<Item.Content>
<Header
size="huge"
content='Event Title'
style={{color: 'white'}}
/>
<p>Event Date</p>
<p>
Hosted by <strong>Bob</strong>
</p>
</Item.Content>
</Item>
</Item.Group>
</Segment>
</Segment>

<Segment attached="bottom">
<Button>Cancel My Place</Button>
<Button color="teal">JOIN THIS EVENT</Button>

<Button as={Link} to={`/mnanage/`} color="orange" floated="right">
Manage Event
</Button>
</Segment>
</Segment.Group>

    )
}