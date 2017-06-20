const InitialState ={}

const II_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_II_FULFILLED":{
					return {...state, InvestorInformation:action.payload}
					break
				}
			}
		return state;
	}
	
export default II_reducer;	