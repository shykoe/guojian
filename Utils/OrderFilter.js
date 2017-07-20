import {
    Filter,
    TextInput,
} from 'admin-on-rest';
import React from 'react';

const OrderFilter = (props) => {
    return (
        <Filter {...props} >
            <TextInput source="_id" />
            <TextInput source="clientName" />
            <TextInput source="sampleName" />
            <TextInput source="sampleProducer" />
            <TextInput source="producerBatch" />
            <TextInput source="sampleType" />
            <TextInput source="sampleLevel" />
            <TextInput source="sampleBrand" />
            <TextInput source="sampleNum" />
            <TextInput source="status" />
        </Filter>
    );
};

export default OrderFilter;
