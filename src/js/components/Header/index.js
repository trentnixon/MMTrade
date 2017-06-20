import React from "react";
import { connect } from "react-redux";

// Components
import MainHeader from "./components/header";
import SubHeader from "./components/subheader";

// Connect
@connect((store) =>{
		return{
			Header: store.CONTENT,
			UI:store.UI
			}
	})
	
export default class Header extends React.Component {
	componentWillMount (){ }

  	render() {
	  	
		let Display = '';
		let UI = '';
		// Create Loading Image
	  	let BackgroundImage = '';
		
		if(this.props.Header.content.data)
	  		{
				Display = this.props.Header.content.data.Content.Header["0"];
				UI = this.props.UI;	
				BackgroundImage = UI.IMGPATH+Display.BackgroundImage;
		}
	
		// Create BG Image styles from Json
		var backgroundImage = { background: 'url('+BackgroundImage+')' }
		
    return (
        <div id="home" class="parallax top-content" style={backgroundImage} data-stellar-background-ratio="0.3">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
						<div class="col-md-8 col-md-offset-2 top-description">
							
							<MainHeader text={Display.Header} />
							<SubHeader text={Display.SubHeader} />
	
						</div>

              		</div>
				</div>
			</div>
		

		</div>
    );
  }
}
