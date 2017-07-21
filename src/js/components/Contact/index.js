import React from "react";
import { connect } from "react-redux";

//import  { WufooForm  } from "react-wufoo-embed";
var Wufoo = require('react-wufoo-embed');

import SectionHeader from "../global/SectionHeader";
import ContactDetails from "./Components/ContactDetails"
import ContactH2Title from "./Components/ContactLocationTitle"
import ContactForm from "./Components/ContactForm";

var ContactData = '';
var ContactValidation;
 var SubmitForm = false;
// Connect
@connect((store) =>{
		return{
			Contact: store.CONTACT,
			ContactForm:store.CONTACTFORM,
			UI:store.UI
			}
	})
	
export default class Contact extends React.Component {

  constructor() {super();}
	
	componentWillMount() {
        
    }
  shouldComponentUpdate(nextProps, nextState){ return true;}

  componentWillUpdate(nextProps, nextState){	
			
			ContactData = nextProps.Contact.Contact.data;
			ContactValidation = nextProps.ContactForm;
		
			if( ContactValidation.FirstName &&
				ContactValidation.LastName &&
				ContactValidation.EmailAddress &&
				ContactValidation.Phone
			  )
			   { SubmitForm=true;}
			   
			  
			//  const script = document.createElement("script");
        	//script.src = "https://form.jotformpro.com/jsform/63545692608970";
        	//script.async = true;
			//document.getElementById("Contact").appendChild(script);
			// <ContactForm Mailto={ContactData.ContactEmail} submitForm={SubmitForm}/> 
	}
		
  render() {
    return (
      <section id="Contact">
	  	<div class="container">
      	
			<SectionHeader text={ContactData.Title}/>
			
			<div class="col-md-6 col-sm-6">
				<ContactH2Title text={ContactData.LoactionTitle} />
				<ContactDetails />
			</div>
			
			<div class="col-md-6 col-sm-6">
				<ContactH2Title text={ContactData.FormTitle} />
				<Wufoo userName="macquariemedia" formHash="mct9uk20c16hua" header="hide"/>	
			</div>
		</div>	 
      </section>
    );
  }
}
