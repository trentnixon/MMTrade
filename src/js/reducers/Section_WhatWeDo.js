const InitialState ={}

const WhatWeDo_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_WHATWEDO_FULFILLED":{
					return {...state, Slides:action.payload}
					break
				}
			}
		return state;
	}
	
export default WhatWeDo_reducer;	