import React from "react";
// Import Router
	import { Link} from 'react-router-dom';

export default class FooterNav extends React.Component {
  constructor() {super();}

  render() { 
    return (
	
		<ul>
			<li><a href="#">Advertise with us</a><span>/</span> </li>
			<li><a href="#">Commercial Agreements</a><span>/</span> </li>   
			<li><Link to="/privacypolicy">Privacy policy</Link><span>/</span></li>   
			<li><a href="#">Support </a><span>/</span></li>
			<li><a href="#">Complaints</a><span>/</span></li>
			<li><a href="#">Terms & Conditions</a></li>
		</ul>
	 );
  }
}
