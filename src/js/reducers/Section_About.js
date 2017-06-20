const InitialState ={}

const About_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_ABOUT_FULFILLED":{
					return {...state, About:action.payload}
					break
				}
			}
		return state;
	}
	
export default About_reducer;	