import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

let SliderLeftH1,SliderRightH1,Slider1Platforms=[],Slider1Partners=[], Slider1BGImage='', DisplaySlider1BGImage;
let Slider2H1,Slider2Copy, Slider2BGImage='',DisplaySlider2BGImage;
let WhatWeDoProps,UI;

// Connect
@connect((store) =>{
		return{
			WHATWEDO:store.WHATWEDO,
			UI:store.UI
			}
	})
	
export default class WhatWeDo extends React.Component {

  	constructor() { super(); }
	
	shouldComponentUpdate(nextProps, nextState){ return true;}
	
  	componentWillUpdate(nextProps, nextState){
			
		 	 WhatWeDoProps = nextProps.WHATWEDO.Slides.data.WhatWeDo;
			 UI = nextProps.UI;
			 
			console.log(nextProps);
			// Slide 1
					Slider1BGImage = UI.IMGPATH+WhatWeDoProps[0].BGImage;
				// Left
					SliderLeftH1 = WhatWeDoProps[0].HeaderLeft;
					Slider1Platforms = WhatWeDoProps[0].Platforms;
				// Right
					SliderRightH1 = WhatWeDoProps[0].HeaderRight;
					Slider1Partners = WhatWeDoProps[0].Partners;
			// Slide 2		
					Slider2BGImage = UI.IMGPATH+WhatWeDoProps[1].BGImage;		 
					Slider2H1 = WhatWeDoProps[1].Header;
					Slider2Copy = WhatWeDoProps[1].Copy;
	}

  render() {
	  	DisplaySlider1BGImage = { backgroundImage: 'url('+Slider1BGImage+')' }
		DisplaySlider2BGImage = { backgroundImage: 'url('+Slider2BGImage+')' }
    return (
      	<section id="whatwedo" class=" content-dark" >
			<div id="bg-carousel" class="carousel slide " data-ride="carousel">
				<div class="carousel-inner">
					
					<div class="item active slide0"  style={DisplaySlider1BGImage}> 
						<div class="container">
							<div class="col-md-7 col-sm-12  col-xs-12 SlideShow">
								<h1>{SliderLeftH1}</h1>
								{Slider1Platforms.map((platform,i)=>{
									return(
										<div key={i} class="col-md-2 col-sm-2 col-xs-4 platform">
											<img src={UI.IMGPATH+'/'+platform.img} />
											<p>{platform.Copy}</p>
										</div>
									)
									
									})}
							</div>
							<div class="col-md-5 col-sm-12 col-xs-12 SlideShow">
								<h1>{SliderRightH1}</h1>
								{Slider1Partners.map((partner, i)=>{
									return(
										<div key={i} class="col-md-4  col-sm-4 col-xs-4 partner">
											
												<img src={UI.IMGPATH+'/'+partner.img} />
										
										</div>
									)
								})}
							</div>
						</div>
					</div>
					<div class="item  slide1"   style={DisplaySlider2BGImage}> 
						<div class="container">
							<div class="col-md-6 col-md-offset-6 SlideShow">
								<h1>{Slider2H1}</h1>
								<p>{Slider2Copy}</p>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</section>
    );
  }
}
