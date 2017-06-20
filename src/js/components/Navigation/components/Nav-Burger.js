import React from "react";
import { Link } from 'react-router-dom';

export default class NavigationBurger extends React.Component {
  render() {
    	return ( 
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
			  );
  }
}