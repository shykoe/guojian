import {
    Filter,
    TextInput,
} from 'admin-on-rest';
import React from 'react';

const OrderFilter = (props) => {
    return (
        <Filter {...props} >
            <TextInput source="_id" />
            <TextInput source="reportNo" />
            <TextInput source="status" />
            <TextInput source="clientName" />
            <TextInput source="sampleName" />
            <TextInput source="sampleProducer" />
            <TextInput source="producerBatch" />
            <TextInput source="sampleType" />
            <TextInput source="sampleLevel" />
            <TextInput source="sampleBrand" />
            <TextInput source="sampleNum" />
        </Filter>
    );
};

export default OrderFilter;
