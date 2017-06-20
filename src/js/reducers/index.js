import { combineReducers } from "redux";

// UI Details
import UI_DATA from "./UI";
// Home page Sections
import HERO from "./Section_Hero";
import MCAST from "./Section_Mcast";
import ABOUT from "./Section_About";
import SHOWREELS from "./Section_Showreels";
import MEDIAKIT from "./Section_Mediakit";
import WHATWEDO from "./Section_WhatWeDo";
import CASESTUDIES from "./Section_CaseStudies";
import SHOWCASE from "./Section_Showcase";
import CAREERS from "./Section_Careers";
import CONTACT from "./Section_ContactDetails";
import CONTACTFORM from "./Section_ContactForm";
import FOOTER from "./Section_Footer";

// Pages
import pp from "./Page_PP";
import II from "./Page_II";

const reducers = combineReducers({
		UI:UI_DATA,
		HERO:HERO,
		ABOUT:ABOUT,
		SHOWREELS:SHOWREELS,
		MEDIAKIT:MEDIAKIT,
		WHATWEDO:WHATWEDO,
		CASESTUDIES:CASESTUDIES,
		SHOWCASE:SHOWCASE,
		MCAST:MCAST,
		CAREERS:CAREERS,
		CONTACT:CONTACT,
		FOOTER:FOOTER,
		pp:pp,
		II:II,
		CONTACTFORM:CONTACTFORM,	
	})

export default reducers;