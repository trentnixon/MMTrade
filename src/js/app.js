import React from "react";
import ReactDOM from "react-dom";
// Import Router
	import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// Import Redux
	import { Provider } from "react-redux";
//Fetch the Store
	import store from "./store/store";

// Include the Stylesheets
	require('../scss/app.scss');
	
// Components
	//import Navigation from "./components/Navigation/";
	import Hero from "./components/HeroCarousel/";
		import Home from "./components/HomePage";
		import investorInformation from "./components/investorInformation";
	import Footer from "./components/Footer/";


	//var DevPath ="/";
	var DevPath ="/~macquar3/";
	
// Router
	const MMTradeSite = () => (
	  <Router Something="Something" >
		<div>
			<Hero />
				<div id="Page-Content">
		 	 		<Route exact path={DevPath} component={Home}/>
					<Route path={DevPath+'information'} component={investorInformation}/>
				</div>
			<Footer />
		</div>
	  </Router>
	)
	
// DOM Location
	const app = document.getElementById('app');	
// Export to DOM
ReactDOM.render(<Provider store={store}><MMTradeSite /></Provider>,app);