import React from "react";
import { Grid } from "semantic-ui-react";
import DetailedHeader from "./DetailedHeader";
import DetailedInfo from "./DetailedInfo";
import DetailedSidebar from "./DetailedSidebar";


export default function DetailedPage(){
    return(
       <Grid>
           <Grid.Column width={10}>
               <DetailedHeader/>
               <DetailedInfo/>
               
           </Grid.Column>
           <Grid.Column width={6}>
               <DetailedSidebar/>
           </Grid.Column>
       </Grid>
    )
}