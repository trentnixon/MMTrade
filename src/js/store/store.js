import { createStore, applyMiddleware } from "redux";
// Import the Requests
	import axios from 'axios';
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "../reducers/index";
//createLogger()
const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer,middleware);

// Dispatch the data bfore loading the site
	// UI
	store.dispatch({ type:"FETCH_UI", payload: true })
	// Hero
	store.dispatch({ type:"FETCH_HERO", payload: axios.get("./json/Section_Hero.json") })
	// About
	store.dispatch({ type:"FETCH_ABOUT", payload: axios.get("./json/Section_About.json") })
	// Media Kits
	store.dispatch({ type:"FETCH_SHOWREELS", payload: axios.get("./json/Section_Showreels.json") })
	// Media Kits
	store.dispatch({ type:"FETCH_MEDIAKIT", payload: axios.get("./json/Section_MediaKit.json") })
	// What We Do
	store.dispatch({ type:"FETCH_WHATWEDO", payload: axios.get("./json/Section_WhatWeDo.json") })
	// Case Studies
	store.dispatch({ type:"FETCH_CASESTUDIES", payload: axios.get("./json/Section_CaseStudies.json") })
	// Talking Lifestyle Campign Showcase
	store.dispatch({ type:"FETCH_SHOWCASE", payload: axios.get("./json/Section_Campaign_Showcase.json") })
	//Mcast
	store.dispatch({ type:"FETCH_MCAST", payload: axios.get("./json/Section_Mcast.json") })
	//Carrers Info
	store.dispatch({ type:"FETCH_CAREERS", payload: axios.get("./json/Section_Careers.json") })
	//Contact Info
	store.dispatch({ type:"FETCH_CONTACT", payload: axios.get("./json/Section_Contact.json") })
	//Contact Info
	store.dispatch({ type:"FETCH_FOOTER", payload: axios.get("./json/Section_Footer.json") })
	
	// Pages
	// Privacy Policy
	store.dispatch({ type:"FETCH_PP", payload: axios.get("./json/Page_PrivacyPolicy.json") })
	// Privacy Policy
	store.dispatch({ type:"FETCH_II", payload: axios.get("./json/Page_InvestorInformation.json") })


export default store;
