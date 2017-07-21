import React from 'react';
import { connect } from 'react-redux';

import Input_Text from "./text";
import Input_hidden from "./hidden";
import Input_Text_Area from "./textarea";
import FormSentConfirmation from "./FormSentConfirmation"


var displayButton; 

class ContactForm extends React.Component {
  handleSubmit(event) {
    // Do anything you want with the form value
    //console.log(event);
	event.preventDefault();
	
	// send form in here
	var d = document.getElementById("FormSent");
	setTimeout(function(){ d.className += "display"; },10)
	
	// Submit form via jQuery/AJAX
		  
		  var data='Form in here';
		  	$.ajax({
				type: 'POST',
				url: '/~macquar3/lib/swift4/ssl.php',
				data: $( 'form' ).serialize()
		  })
		  .done(function(data) {
			console.log(data);
		  })
		  .fail(function(jqXhr) {
			console.log('failed to register');
		  });
  
  
  }
  shouldComponentUpdate(nextProps, nextState){ return true;}

  componentWillUpdate(nextProps, nextState){
	 
	 if(!nextProps.submitForm) { displayButton = <button type="submit" class="btn btn-primary btn-submitForm" disabled="disabled">Submit</button>;}
	else if(nextProps.submitForm){ displayButton=<button type="submit" class="btn btn-primary btn-submitForm">Submit</button>;}
	 }

  render() {
	  
    return (
      	
		<form onSubmit={this.handleSubmit}>

			<Input_hidden  name="mailto" value={this.props.Mailto} />
			<Input_Text type="text" name="FirstName" label="First Name:" placeholder="First Name" value="" required="required" />
			<Input_Text type="text" name="LastName" label="Last Name:" placeholder="Last Name" value="" required="required" />
			<Input_Text type="email" name="EmailAddress" label="Email:" placeholder="Email Adrress" value="" required="required" />
			<Input_Text type="number" name="Phone" label="Phone:" placeholder="Phone" value="" required="" />
			<Input_Text_Area name="query" label="How can we help?" value=""/>
			{displayButton}
			<FormSentConfirmation />
			
			
		</form>
    );
  }
}

// No need to connect()!
export default ContactForm;