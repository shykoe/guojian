import Icon from 'material-ui/svg-icons/action/event';

import React, { Component } from 'react';
import {
    BooleanField,
    BooleanInput,
    CheckboxGroupInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    DisabledInput,
    Edit,
    EditButton,
    Filter,
    FormTab,
    ImageField,
    ImageInput,
    List,
    LongTextInput,
    NumberField,
    NumberInput,
    ReferenceManyField,
    Responsive,
    RichTextField,
    SelectField,
    SelectInput,
    Show,
    ShowButton,
    SimpleForm,
    SimpleList,
    SimpleShowLayout,
    TabbedForm,
    TextField,
    TextInput,
    minValue,
    number,
    required,
    translate,
} from 'admin-on-rest';

import RichTextInput from 'aor-rich-text-input';
import Chip from 'material-ui/Chip';
import CheckField from '../Pick/CheckField';
import TextButton from './TextButton';
import { WorkSpace } from './WorkSpace';
import TextStatus from './TextStatus'; 
import SegmentsFieldContactInf from './SegmentsFieldContactInf';
import SegmentsFieldClientInf from './SegmentsFieldClientInf';
import SegmentsFieldSampleInf from './SegmentsFieldSampleInf';
export const AllOrderIcon = Icon;

var choicesId=[];
var choicesSampleName=[];
var choicesSampleProducer=[];
var choicesProducerBatch=[];
var choicesSampleType=[];
var choicesSampleLevel=[];
var choicesSampleBrand=[]; 
var choicesSampleNum=[];
var choicesClientName=[]; 
var choicesClientContactName=[];
var choicesClientContactPhone=[]; 
var choicesClientContactIdent=[];
var choicesClientEconomicType=[];
var choicesStatus=[];
var choicesAgent=[];  
var choicesAssigner=[]; 
var choicesKeeper=[];  
var choicesTester=[]; 
var choicesAgentMsg=[];
var choicesKeeperMsg=[];
  
/*
id
sampleName
sampleProducer
producerBatch
sampleType
sampleLevel
sampleBrand
sampleNum
clientName
clientContactName
clientContactPhone
clientContactIdent
clientEconomicType
agent
assigner
keeper
tester
agentMsg
keeperMsg

*/
Array.prototype.unique3 = function(){
    var res = [];
    var json = {};
    //console.log('----unique3fun---');
   // console.log(this,this.length);
    // console.log(this[0]);
    // console.log(this[1]);
    // console.log(this[3]);
    for(var i = 0; i < this.length; i++){ 
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}

const rowStyle = (record) => {

   // console.log('-----------',record); 
    //if (record.status === "检测完成") return { backgroundColor: '#dfd' }; 
   // console.log('---len-',choicesx.length,'-',choicesId.length);
    //choicesx[choicesx.length]=record; 
    choicesId.push({id:record.id}); 
    choicesSampleName.push({sampleName:record.sampleName});
    choicesSampleProducer.push({sampleProducer:record.sampleProducer});
    choicesProducerBatch.push({producerBatch:record.producerBatch});
    choicesSampleType.push({sampleType:record.sampleType});
    choicesSampleLevel.push({sampleLevel:record.sampleLevel});
    choicesSampleBrand.push({sampleBrand:record.sampleBrand});
    choicesSampleNum.push({sampleNum:record.sampleNum});
    choicesClientName.push({clientName:record.clientName});
    choicesClientContactName.push({clientContactName:record.clientContactName});
    choicesClientContactPhone.push({clientContactPhone:record.clientContactPhone});
    choicesClientContactIdent.push({clientContactIdent:record.clientContactIdent});
    choicesClientEconomicType.push({clientEconomicType:record.clientEconomicType});
    choicesStatus.push({status:record.status});
    choicesAgent.push({agent:record.agent});  
    choicesAssigner.push({assigner:record.assigner}); 
    choicesKeeper.push({keeper:record.keeper});  
    choicesTester.push({tester:record.tester});
    choicesAgentMsg.push({agentMsg:record.agentMsg});
    choicesKeeperMsg.push({keeperMsg:record.keeperMsg}); 

   
    choicesId.unique3();
    choicesSampleName.unique3();
    choicesSampleProducer.unique3();
    choicesProducerBatch.unique3();
    choicesSampleType.unique3();
    choicesSampleLevel.unique3();
    choicesSampleBrand.unique3();
    choicesSampleNum.unique3();
    choicesClientName.unique3();
    choicesClientContactName.unique3();
    choicesClientContactPhone.unique3();
    choicesClientContactIdent.unique3();
    choicesClientEconomicType.unique3();
    choicesStatus.unique3();
    choicesAgent.unique3(); 
    choicesAssigner.unique3();
    choicesKeeper.unique3();
    choicesTester.unique3();
    choicesAgentMsg.unique3();
    choicesKeeperMsg.unique3();
    return {};
};

 
const choicesx=[
    { "roles": 'admin', "name": '管理员' },
    { "roles": 'clerk', "name": '业务员' },
    { "roles": 'checker', "name": '检测员' }, 
];

const AllOrderFilter = (props) => { 
//console.log('---------------record--'); 
//console.log(choicesId);
//console.log('---------------record   sampleName--'); 
//console.log(choicesSampleName,choicesx,choicesx.length); 
//console.log('---------------record   sampleName   unique3--'); 
//console.log(choicesSampleName.unique3());  
    return ( 
        <Filter {...props} > 
            <TextInput label="id" source="_id"/>     
            <TextInput source="sampleName"  />
            <TextInput source="sampleProducer" />
            <TextInput source="producerBatch"  />
            <TextInput source="sampleType"  />
            <TextInput source="sampleLevel" />
            <TextInput source="sampleBrand"  />
            <TextInput source="sampleNum" />
            <TextInput source="clientName" />
            <TextInput source="clientContactName"  />
            <TextInput source="clientContactPhone"  />
            <TextInput source="clientContactIdent"/>
            <TextInput source="clientEconomicType" />
            <TextInput source="status"  /> 
        </Filter>
         ); 
} ;

export const AllOrderList = ({ ...props }) => (
    <List {...props} filters={<AllOrderFilter />} perPage={25} sort={{ field: 'id', order: 'ASC' }}   >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                 />
            }
            medium={
                <Datagrid rowStyle={rowStyle}  >
                    <TextField source="id" /> 
                    <TextField source="sampleName"  />
                    <TextField source="sampleProducer"  />
                    <TextField source="producerBatch" />
                    <SegmentsFieldSampleInf/>
                    <SegmentsFieldClientInf/>
                    <SegmentsFieldContactInf /> 
                    <TextStatus source="status" />
                  
                </Datagrid>
            }
        />
    </List>
);
export class AllOrderEdit extends Component {
    render(){
        return(
    <Edit {...this.props} >
        <SimpleForm>
            <TextField source="id"  style={{ display: 'inline-block' }} />
            <TextField source="ProductName"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="ModelType"  style={{ display: 'inline-block', marginLeft: 32 }} />
            <DateField source="published_at" style={{ fontStyle: 'italic', display: 'inline-block', marginLeft: 32 }} />
            <TextField source="TradeMark" style={{ display: 'inline-block', marginLeft: 32  }}  />
            <TextField source="ManufactureredDate" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextField source="Contact" style={{ display: 'inline-block'  }}  />
            <TextField source="TelNum" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="Adress" style={{ display: 'inline-block' , marginLeft: 32 }} />
            <TextField source="Manufacturer" style={{ display: 'inline-block', marginLeft: 32}} />
            <TextField source="CommissionedUnit"  style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextField source="KindofTest" style={{ display: 'inline-block', marginLeft: 32  }} />
            <CheckField detail={true} />
            <br/>
            <TextInput source="TestCount" style={{ display: 'inline-block'  }} />
            <DateInput source="Receive_at" style={{ display: 'inline-block', marginLeft: 32  }} />
            <DateInput source="SamplingDate" style={{ display: 'inline-block', marginLeft: 32  }} />
            <br/>
            <TextInput source="SealingStaff" style={{ display: 'inline-block' }} />
            <TextInput source="TestPlace" style={{ display: 'inline-block', marginLeft: 32  }} />
            <TextInput source="SealingStaff" style={{ display: 'inline-block', marginLeft: 32  }} />
            <WorkSpace />
        </SimpleForm>
    </Edit>);
}
}


/*
  <SelectInput source="sampleName" choices={choicesSampleName} optionText="sampleName" optionValue="sampleName" />
            <SelectInput source="sampleProducer" choices={choicesSampleProducer} optionText="sampleProducer" optionValue="sampleProducer" />
            <SelectInput source="producerBatch" choices={choicesProducerBatch} optionText="producerBatch" optionValue="producerBatch" />
            <SelectInput source="sampleType" choices={choicesSampleType} optionText="sampleType" optionValue="sampleType" />
            <SelectInput source="sampleLevel" choices={choicesSampleLevel} optionText="sampleLevel" optionValue="sampleLevel" />
            <SelectInput source="sampleBrand" choices={choicesSampleBrand} optionText="sampleBrand" optionValue="sampleBrand" />
            <SelectInput source="sampleNum" choices={choicesSampleNum} optionText="sampleNum" optionValue="sampleNum" />
            <SelectInput source="clientName" choices={choicesClientName} optionText="clientName" optionValue="clientName" />
            <SelectInput source="clientContactName" choices={choicesClientContactName} optionText="clientContactName" optionValue="clientContactName" />
            <SelectInput source="clientContactPhone" choices={choicesClientContactPhone} optionText="clientContactPhone" optionValue="clientContactPhone" />
            <SelectInput source="clientContactIdent" choices={choicesClientContactIdent} optionText="clientContactIdent" optionValue="clientContactIdent" />
            <SelectInput source="clientEconomicType" choices={choicesClientEconomicType} optionText="clientEconomicType" optionValue="clientEconomicType" />
            <SelectInput source="status" choices={choicesStatus} optionText={<TextStatus/>} optionValue="status" />
            */