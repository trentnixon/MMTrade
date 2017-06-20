import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImg from "../global/SectionImage";

let Header,Copy,Mcasts,Logo;

@connect((store) =>{
		return{
			MCAST: store.MCAST,
			UI:store.UI
			}
	})
	
export default class Mcast extends React.Component {

  	constructor() {  super();  }
	shouldComponentUpdate(nextProps, nextState){ return true;}
	
  	componentWillUpdate(nextProps, nextState){
	
			//console.log(nextProps.MCAST.PODCASTS.data.Mcast["0"])
		  	let UI = nextProps.UI;	
		  	let DisplayMcast = nextProps.MCAST.PODCASTS.data.Mcast["0"];
 		
			Header = DisplayMcast.Header;
			Copy = DisplayMcast.Text.split('\n').map((item, key) => { return <SectionText key={key} text={item}/>})
			Logo = UI.IMGPATH+DisplayMcast.Logo;

			Mcasts =DisplayMcast.Mcast.map((cast,i)=>{
					return(
	
							<div key={i} class="col-md-3 col-sm-3 col-xs-6 castItem">
								<a href={cast.url} target="_blank">
									<div class="overlay"> 
										<div>
											<i class="fa fa-headphones" aria-hidden="true"></i>
											<h3>Listen to {cast.title} on mcast.com.au</h3>
										</div>
									</div>
								
								
									<SectionImg img={cast.img} AddClass="img-responsive center-block"/>
									
								</a>
							</div>
					)
				})
	}

  render() {
	
    return (
      	<section id="Mcast">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						<SectionHeader text={Header}/>
					</div>			
				</div>
				
				<div class="row">	
					{Copy}
					
				</div>
				<div class="row">
					{Mcasts}
					
				</div>
				<p><br /><a href="http://mcast.com.au/#/audio-for-brands" target="_blank">Click here </a> to find out more about how a branded podcast could work for you</p>
			</div>
		</section>
    );
  }
}
