import React from "react";

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router';
	
import NavLogo from "./components/Nav-Logo";
import NavBurger from "./components/Nav-Burger";
import NavList from "./components/Nav-List";
import NavInvestor from "./components/Nav-Investors";

var DisplayNav;
	
export default class Navigation extends React.Component {
	componentWillMount(){
		
			var Location = this.props.location.pathname;
			
			if(Location == '/~macquar3/information') { DisplayNav =   <NavInvestor /> ;}
			else { DisplayNav = <NavList />;}
	}
		
  render() {

    return (
	  <div class="navbar navbar-default navbar-fixed-top menu-top" role="navigation">
            <div class="container">
				<div class="navbar-header">  
              		<NavBurger />
			       <NavLogo />
			    </div>
                <div class="navbar-collapse collapse">
					 {DisplayNav}
				</div> 
			</div>
        </div>
    );
  }
}