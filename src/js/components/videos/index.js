import React from "react";

	import MediaKit from "../MediaKits";
	import Showreel from "../showreels";

	var  DisplayComponent, NewView;


	const StateShowreel={
				current:true,
				change:false,
				label:'View Media Kits',
				component:<Showreel />
			}

	const StateMediaKit={
				current:false,
				change:true,
				label:'Station ShowReels',
				component:<MediaKit />
			}


export default class Videos extends React.Component {
	
	constructor() {
			super();
			this.state = { view: StateShowreel };
	}
	
	ChangeView(changeView){ 
		if(changeView == true){ NewView = StateShowreel}
		else if(changeView == false) { NewView = StateMediaKit }
	 	this.setState({
				view: NewView
			})		
	}
	  
  render() {
	  return (	
				<section class="secondary" id="Video">
					<div class="container">
						<div class="row">
						{this.state.view.component}
						</div>
						<div class="row">
							<div class="col-md-12 text-center">
								<button class="btn btn-primary btn-showreel" onClick={()=>this.ChangeView(this.state.view.change)}> 
									{this.state.view.label} 
								</button>
							</div>
						</div>
					</div>
				</section>
			)			
  	}
}
