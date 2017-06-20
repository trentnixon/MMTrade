const InitialState =
	{
		completed:false,
			path:'/~macquar3/',
			IMGPATH:'./img/',
			PDFPATH:'./pdf/',
			Stage:false,
			ShowcasePath:'./showcase/',
			IconPath:'./showcase/icons/',
			Project:[]
	}

const UI_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_UI":{
					return {...state, completed:action.payload}
					break
				}
			
			case "SHOW_STAGE":{
					return{...state,Stage:true}
				}
			case "CLOSE_STAGE":{
					return{...state,Stage:false}
				}
			case "SELECTED_SHOWCASE":{
					return{...state,Project:action.payload}
				}
			}
		return state;
	}
	
export default UI_reducer;	