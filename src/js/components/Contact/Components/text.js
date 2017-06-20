import React from 'react';
import { connect } from 'react-redux';


import {inputTrue} from "../../../actions/"


var IsEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var IsLetter = /^[a-zA-Z]/;
var isnum = /^\d+$/


@connect((store) =>{
		return{
			ContactForm:store.ContactForm,
			UI:store.UI
			}
	})
class ContactForm extends React.Component {
  constructor() {super();}
  
  handleChange(event) {
	  
    // Do anything you want with the form value
	let Value = event.target.value;
	let Type = event.target.type;
	let Name = event.target.name;
	console.log(Value);
	
	// Check that the input is Text Only
	if(Type == 'text')
		{
			if (IsLetter.test(Value)){  this.props.dispatch(inputTrue(Name)) }
			else{ console.log("This is not text") }
			}
	else if(Type == 'email')
		{
			if (IsEmail.test(Value)) { this.props.dispatch(inputTrue(Name))}
			else { console.log("Email Not Valid")}
			}
	else if(Type = 'number')
		{
			if (isnum.test(Value)) { this.props.dispatch(inputTrue(Name))}
			else { console.log("Number  Not Valid")}
			
			}
  }

  render() {
    return (
      	
			<div class="form-group">
				<div class="row">
				<div class="col-md-4"> 
					<label for={"Input_"+this.props.name}>{this.props.label}</label>
				</div>
				<div class="col-md-8">
					<input 
						type={this.props.type} 
						name={this.props.name} 
						class="form-control" 
						id={"Input_"+this.props.name} 
						placeholder={this.props.placeholder} 
						required={this.props.required} 
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				</div>
			 </div>
    );
  }
}

// No need to connect()!
export default ContactForm;