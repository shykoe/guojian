import {
    Filter,
    TextInput,
} from 'admin-on-rest';
import React from 'react';
const OrderFilter = (props) => { 
    return ( 
        <Filter {...props} >   
            <TextInput source="sampleName"  />
            <TextInput source="sampleProducer" />
            <TextInput source="clientName" />
        </Filter>
         ); 
};
export default OrderFilter;