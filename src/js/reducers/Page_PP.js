const InitialState ={}

const pp_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_PP_FULFILLED":{
					return {...state, PrivacyPolicy:action.payload}
					break
				}
			}
		return state;
	}
	
export default pp_reducer;	