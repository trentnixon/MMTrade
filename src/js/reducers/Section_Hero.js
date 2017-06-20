const InitialState ={}

const Hero_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_HERO_FULFILLED":{
					return {...state, Slides:action.payload}
					break
				}
			}
		return state;
	}
	
export default Hero_reducer;	