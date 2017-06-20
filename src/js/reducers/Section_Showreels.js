const InitialState ={}

const Showreel_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_SHOWREELS_FULFILLED":{
					return {...state, Showreels:action.payload}
					break
				}
			}
		return state;
	}
	
export default Showreel_reducer;	