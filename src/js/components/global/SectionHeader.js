import React from "react";

export default class MainHeader extends React.Component {
  render() {
    return (
		<div class="col-md-12 nopadding">		
	      <h1 class="text-center section-header">{this.props.text}</h1>
    	</div>
	);
  }
}