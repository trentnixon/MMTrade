import React from "react";

import Navigation from "./Navigation/";
import Header from "./Header/";
import About from "./InformationAudio/";
import Videos from "./videos/";
import WhatWeDo from "./WhatWeDo/";
import CaseStudies from "./CaseStudies/";
import TalkingLifestyle from "./TalkingLifestyle/";
import Mcast from "./Mcast/";
import Careers from "./Careers/";
import Contact from "./Contact/";


export default class Layout extends React.Component {
  constructor() { super();}
  render() {
    //console.log(this.props)
	return (
      <div>
	  		<Navigation {... this.props} />
			<About />
			<Videos />
			<WhatWeDo />
			<CaseStudies />
			<TalkingLifestyle />
			<Mcast />
			<Careers />
			<Contact />
      </div>
    );
  }
}
