import React from "react";

export default class GlobalText extends React.Component {
  render() {
    return (
				<div class="overlay" data-toggle="modal" data-target={this.props.id}> 
					<div>
						<i class="fa fa-play-circle-o" aria-hidden="true"></i>
							<h3>Find out more about {this.props.title}</h3>
					</div>
				</div>	
			
	);
  }
}