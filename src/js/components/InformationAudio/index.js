import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

var Header,Copy,Img, Logos;

@connect((store) =>{
		return{
			ABOUT:store.ABOUT,
			UI:store.UI
			}
	})
	
export default class About extends React.Component {
  
  	constructor() {  super();  }

	shouldComponentUpdate(nextProps, nextState){ return true;}

  	componentWillUpdate(nextProps, nextState){

			console.log(nextProps);

			var AboutMM = nextProps.ABOUT.About.data;
			var UI = nextProps.UI;

			Header = <SectionHeader text={AboutMM.Header}/>;
			Copy = AboutMM.Text.split('\n').map((item, key) => { return <SectionText key={key} text={item}/>})
			Img = <SectionImage img={UI.IMGPATH+AboutMM.img} AddClass="img-responsive center-block" />;
			Logos = AboutMM.stations.map((logo, i)=>{
					return(
							<a  key={i} href={logo.url} target="_blank"  class="floatingLink" id={logo.class}><img src={UI.IMGPATH+logo.img} /></a>
						)
				})	
	}
	
  render() {
	 
	return (
      <section class="secondary" id="About" >
	  		<div class="container">
						{Header}
					<div class="col-md-6 nopadding">
						<div class="Map">
							{Img}
							{Logos}
						</div>
					</div>
					<div class="col-md-6">
						{Copy}
					</div>
			</div>		
      </section>
    );
  }
}
