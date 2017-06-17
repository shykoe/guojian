import { createClass } from 'asteroid';
import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
} from 'admin-on-rest';
const Asteroid = createClass();
// Connect to a Meteor backend
export const asteroid = new Asteroid({
  endpoint: 'ws://localhost:9000/websocket',
});
const mapResponse2Rest = (response, type, params)=>{
	switch(type){
		case GET_LIST:
			response.map((item)=>{item['id']=item._id});
			return { data: response,total: response.length };
		case GET_ONE:
			response['id'] = response._id;
			return {data: response};
		default:
			response['id'] = response._id ? response._id : response.id ;
			return {data: response};		
	}
}
export const websockClient = (type, resource, params) =>{
	console.log(type, resource, params);
	switch (resource){
		case 'MyItem':{
            switch(type){
            	case GET_LIST:{
    				const { page, perPage } = params.pagination;
			        const { field, order } = params.sort;
			        const { username, role } = params;
			        
			        return asteroid.call('agent.myorders.get',username, role, page, perPage, field, order)
			        .then(response => mapResponse2Rest(response, type, params));
			        
            	};
            	case GET_ONE:{
            		const { id } = params;
            		return asteroid.call('order.get',id)
            		.then(response => mapResponse2Rest(response, type, params));
            	}
            	case UPDATE:{
            		const { id, data, previousData } = params;
            		if(data.status === previousData.status){
            			return mapResponse2Rest(previousData, type, params);
            		}
            		if(data.status == 4){
            			return asteroid.call('agent.order.approve', id, data)
            			.then(response => mapResponse2Rest(response, type, params));
            		}
            	}

            }
            break;

		};
		case 'ApplyItem':{
			switch(type){
				case GET_LIST:{
					
					const { page, perPage } = params.pagination;
			        const { field, order } = params.sort;
			        const { username, role } = params;
			        return asteroid.call('agent.orders.get', username, role, page, perPage, field, order)
			        .then(response => mapResponse2Rest(response, type, params) );
				};
				case GET_ONE:{					
					return asteroid.call('order.get',params.id)
					.then(response => mapResponse2Rest(response, type, params) );
				}
			}
			break;
		};
		case 'MyCheck':{
			switch(type){
				case GET_LIST:{
    				const { page, perPage } = params.pagination;
			        const { field, order } = params.sort;
			        const { username, role } = params;
			        return asteroid.call('tester.orders.get',username, role, page, perPage, field, order)
			        .then(response => mapResponse2Rest(response, type, params));					
				};
				case GET_ONE:{
					const { id } = params;
					return asteroid.call('order.get',id)
            		.then(response => mapResponse2Rest(response, type, params));
				}
				case UPDATE:{
					const { id, data, previousData } = params;
					previousData.items.map(
						(item)=>{
								if (data[item.name] != undefined){
									item.requirement = data[item.name];
								}
							}
						);
					return asteroid.call('tester.order.update', id, previousData)
					.then(response => mapResponse2Rest(response, type, params));
				}
			}
			break;
		};
		case 'Allocatoritems':{
			switch(type){
				case GET_LIST:{
					const { page, perPage } = params.pagination;
			        const { field, order } = params.sort;
			        return asteroid.call('orders.get',page, perPage, field, order)
			        .then(response => mapResponse2Rest(response, type, params));
				};
				case UPDATE:{
					const { id, data, previousData } = params;
					if(data === previousData){
						return mapResponse2Rest(previousData, type, params);
					}
					return asteroid.call('assigner.tester.set', id, data)
					.then(response => mapResponse2Rest(response, type, params));
				};
				case GET_ONE:{
					const { id } = params;
					return asteroid.call('order.get',id)
            		.then(response => mapResponse2Rest(response, type, params));
				}
				
			}
			break;
		}
		case 'Keepers':{
			switch(type){
				case GET_LIST:{
					const { page, perPage } = params.pagination;
			        const { field, order } = params.sort;
			        return asteroid.call('orders.get',page, perPage, field, order)
			        .then(response => mapResponse2Rest(response, type, params));
				}
				case GET_ONE:{
					const { id } = params;
					return asteroid.call('order.get',id)
            		.then(response => mapResponse2Rest(response, type, params));
				}
			}
			break;
		}
	}
}