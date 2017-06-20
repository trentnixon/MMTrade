const InitialState ={}

const Careers_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_CAREERS_FULFILLED":{
					return {...state, Careers:action.payload}
					break
				}
			}
		return state;
	}
	
export default Careers_reducer;	