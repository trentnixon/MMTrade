const InitialState ={Contact:{}}

const Contact_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_CONTACT_FULFILLED":{
					return {...state, Contact:action.payload}
					break
				}
			}
		return state;
	}
	
export default Contact_reducer;	