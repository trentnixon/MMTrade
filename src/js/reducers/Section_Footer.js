const InitialState ={}

const Footer_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_FOOTER_FULFILLED":{
					return {...state, Footer:action.payload}
					break
				}
			}
		return state;
	}
	
export default Footer_reducer;	