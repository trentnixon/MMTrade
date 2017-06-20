import React from "react";
import { connect } from "react-redux";

// Components
var DisplayHero;

// Connect
@connect((store) =>{
		return{
			HERO: store.HERO,
			UI:store.UI
			}
	})
	
export default class Header extends React.Component {
	componentWillMount (){ }
	shouldComponentUpdate(nextProps, nextState){ return true;}

	componentWillUpdate(nextProps, nextState){
			
			var HeroPanels = nextProps.HERO.Slides.data.SLIDES;
			var UI = nextProps.UI;
			
			DisplayHero = HeroPanels.map((hero,i)=>{
				
					var BackgroundImage = UI.IMGPATH+hero.BackgroundImage;
					var backgroundImage = { backgroundImage: 'url('+BackgroundImage+')' }
					
					return(
						<div class={"item "+hero.ActiveClass} key={i}>
							<div class={"DisplaySlide  slide"+i}  style={backgroundImage}> 
								<div class="col-md-8 col-md-offset-2 top-description">
									<h2>{hero.Header}</h2>
									<p>{hero.SubHeader}</p>
								</div>
							</div>
						</div>
					
					)
				})
		}
  	render() {
	  
		return (
			<div id="Home">
			<div id="bg-fade-carousel" class="carousel slide " data-ride="carousel">
				<div class="carousel-inner">
					{DisplayHero}
				</div>
			</div>
			</div>
		)
  	}
}
