import React from "react";
import { connect } from "react-redux";

let ContactDetails,Phone,Fax,Building,Address,Suburb,POBox,POBoxCityState,POBoxPostcode;
 
// Connect
@connect((store) =>{
		return{
			Contact: store.CONTACT,
			}
	})
	
export default class Contact extends React.Component {
  constructor() {super();}
  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){
	 
		ContactDetails = nextProps.Contact.Contact.data;
		Phone = ContactDetails.Phone;
		Building = ContactDetails.Building;
		Address = ContactDetails.Address;
		Suburb = ContactDetails.Suburb;
		POBox = ContactDetails.POBox;
		POBoxCityState = ContactDetails.POBoxCityState;
		POBoxPostcode = ContactDetails.POBoxPostcode;
	 }
  render() {
	  
    return (
      			<div>
					<ul>
						<li>Phone:{Phone}</li>
					</ul>
					<ul>	
						<li>Address: {Building}</li>
						<li>{Address}</li>
						<li>{Suburb}</li>
						<li>{POBox}</li>
						<li>{POBoxCityState}</li>
						<li>{POBoxPostcode}</li>
					</ul>
				</div>
    );
  }
}
