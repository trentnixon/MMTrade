import React from "react";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

export default class NavigationBurger extends React.Component {

	onclick(event){
		event.preventDefault();
		var target = event.target 
		var Offset = $(target.getAttribute('href')).offset().top - 80;
		$('html, body').animate({scrollTop: Offset},'slow','swing');
	
	}	
	
  render() { 
    	return ( 
				<div>
					<Scrollspy items={ ['Home', 'About', 'Video','CaseStudies','TalkingLifestyle','Mcast','Contact','information'] }  currentClassName="is-current" offset={80} class="nav navbar-nav navbar-right" >
						<li class="scroll"><a onClick={this.onclick}  href="#Home">Home</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#About">About us</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#Video">Our Brands</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#whatwedo">Our Difference</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#TalkingLifestyle">Our Work</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#Contact">Contact</a></li>
						<li><Link to="/~macquar3/information" >Investors</Link></li>
				 	 </Scrollspy>
				</div>					
			  );
  	}
}