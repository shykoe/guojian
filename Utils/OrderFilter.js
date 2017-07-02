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
            <TextInput source="status"  /> 
        </Filter>
         ); 
};
export default OrderFilter;