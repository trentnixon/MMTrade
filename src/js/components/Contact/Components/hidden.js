import React from 'react';
import { connect } from 'react-redux';


class ContactForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      	
			<div>
				
					<input 
						type="hidden" 
						name={this.props.name} 
						class="form-control" 
						id={"Input_"+this.props.name} 
						value={this.props.value}
					/>
			 </div>
    );
  }
}

// No need to connect()!
export default ContactForm;