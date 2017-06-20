import React from "react";
import { connect } from "react-redux";
import { Link} from 'react-router-dom';

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";
import FooterNav from "./components/footerNav";

let FooterStore, UI,FooterLogos,FooterSocial;


// Connect
@connect((store) =>{
		return{
			Footer:store.FOOTER,
			UI:store.UI
			}
	})
	
export default class Footer extends React.Component {	
	constructor() {super();}

  	shouldComponentUpdate(nextProps, nextState){ return true;}

  	componentWillUpdate(nextProps, nextState){

		 	 FooterStore = nextProps.Footer.Footer.data;
			 UI = nextProps.UI;

			 FooterLogos = FooterStore.StationLogos.map((logo) =>{
					 return(
					 	<div key={logo.title} class="col-md-2 col-sm-2  col-xs-6">
							<a href={logo.url} target="_blank">
								<SectionImage img={UI.IMGPATH+logo.img} />
							</a>
						</div>
					 )
				})
			
			FooterSocial = FooterStore.socialMedia.map((social)=>{
					var SocialColor = { backgroundColor: social.color }  
					return(
						<div key={social.title} class="col-md-3 col-sm-3 col-xs-3">
							<a href={social.url} target="_blank" style={SocialColor}  class="socialIcon">
								<i class={social.Icon} aria-hidden="true"></i>
							</a>
						</div>
					)
		})
	}
  
  	render() {		  
 	   return (
    	  <section id="footer">
	  		<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-12 nopadding SocialIcons">
						{FooterSocial}
					</div>
					<div class="col-md-8 col-sm-12  nopadding StationLogos">
						{FooterLogos}
					</div>
				</div>
				<SectionText text={Footer.Text} />
			</div>	  
	  	</section>
    )
  }
}