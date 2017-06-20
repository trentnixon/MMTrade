import React from "react";


import CloseStage from "./Close_Stage";

export default class StageHeader extends React.Component {
  render() {
    return (
			<div class="container" id="StageHeader">
				<div class="col-md-4 col-sm-4 col-xs-4">
					<img src={this.props.headerIcon} class="HeaderIcon"/>
					<a href={this.props.sponsorURL} target="_blank">
						<img src={this.props.sponsorLogo}  class="HeaderLogo"/>
					</a>
					
				</div>
				
				<div class="col-md-4 col-sm-4 col-xs-4">
					<h1>{this.props.header}</h1>
					<h2>{this.props.subheader}</h2>
					
				</div>
				<div class="col-md-4 close">
					<CloseStage />
				</div>
			</div>
			
	);
  }
}