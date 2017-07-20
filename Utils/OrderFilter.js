import {
    Filter,
    TextInput,
} from 'admin-on-rest';
import React from 'react';

const OrderFilter = (props) => {
    return (
        <Filter {...props} >
            <TextInput label="id" source="_id" />
            <TextInput source="sampleName" />
            <TextInput source="sampleProducer" />
            <TextInput source="producerBatch" />
            <TextInput source="sampleType" />
            <TextInput source="sampleLevel" />
            <TextInput source="sampleBrand" />
            <TextInput source="sampleNum" />
            <TextInput source="clientName" />
            <TextInput source="status" />
        </Filter>
    );
};

export default OrderFilter;
