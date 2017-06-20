const InitialState =
	{
		FirstName: false,
  		LastName: false,
		EmailAddress:false,
		Phone:false,
		enable:false
	}

const FORM_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "CREATE_CONTACT_FORM":{
					return {...state, completed:action.payload}
					break
				}
			
			case "INPUT_TRUE":{
				var inputType = action.payload.input;
				return {...state, [inputType]:true}
					break
				}
			case "ENABLE_TRUE":{
				var inputType = action.payload.input;
				return {...state, enable:action.payload}
					break
				}			
			}
		return state;
	}
	
export default FORM_reducer;	