import React from 'react';
import { connect } from 'react-redux';


class ContactForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      	
			<div class="form-group">
			<div class="row">
				<div class="col-md-12">
					<label for={"Input_"+this.props.name}>{this.props.label}</label>
					<textarea  
						name={this.props.type} 
						class="form-control" 
						id={"Input_"+this.props.name}
					/>
				</div>
			</div>
			</div>
    );
  }
}

// No need to connect()!
export default ContactForm;