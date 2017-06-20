import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";


let Header,Copy,BgStyle,SupportingStyle,SupportingImg,BackgroundImage;

// Connect
@connect((store) =>{
		return{
			Content: store.CONTENT,
			CAREERS:store.CAREERS,
			UI:store.UI
			}
	})
	
export default class Careers extends React.Component {
	constructor() {  super();  }
	
	ResizeImage(){
		// Resize the image to fit the height
			setTimeout(function(){
				var BoxHeight = $("#Careers .DarkBox").height()
				$(".DarkBox > div.col-md-5").css('height',BoxHeight);
			},100);
		}
	
	shouldComponentUpdate(nextProps, nextState){ return true;}
  	
	componentWillUpdate(nextProps, nextState){
	
		 	 var Careers = nextProps.CAREERS.Careers.data;
   			 var UI = nextProps.UI;
			 
			 Header =Careers.Header;
			 Copy = Careers.Text.split('\n').map((item, key) => { return <SectionText key={key} text={item}/>})
			 SupportingImg = UI.IMGPATH+Careers.SupportingImage; 
			 BackgroundImage = UI.IMGPATH+Careers.BackgroundImage;
		
			// Create BG Image styles from Json
			BgStyle = { backgroundImage: 'url('+BackgroundImage+')' }  
			SupportingStyle = { backgroundImage: 'url('+SupportingImg+')' }
					
		}

  render() {
 	// resize the BG image on render
 	this.ResizeImage();
 
    return (
      	<section id="Careers" class="parallax content-dark" style={BgStyle} data-stellar-background-ratio="0.3">
			<div class="container">
				<div class="col-md-8 col-md-offset-2 DarkBox nopadding">
					<div class="col-md-5 nopadding" style={SupportingStyle}>&nbsp;</div>
					<div class="col-md-7">
						<SectionHeader text={Header}/>
						{Copy}
					</div>
				</div>
			</div>
		</section>
    );
  }
}
