import React from "react";
import { connect } from "react-redux";



var CreateBackgroundImage,DisplaybackgroundImage;
// Fetch Actions

import Stage_Header from "./Stage_Header";
import Stage_Left from "./Stage_Left";
import Stage_Right from "./Stage_Right";

@connect((store) =>{
		return{
			Content: store.SHOWCASE,
			UI:store.UI
			}
	})

export default class ShowcaseStage extends React.Component {
	
	componentDidMount(){
	
		var d = document.getElementById("Stage");
		setTimeout(function(){ d.className += "showStage"; },10)
		
	}
	componentWillMount(){
			CreateBackgroundImage = this.props.UI.ShowcasePath+'Showcase-BG-'+this.props.UI.Project.project.Slug+'.jpg';
		 	console.log(CreateBackgroundImage)
		 	DisplaybackgroundImage = { backgroundImage: 'url('+CreateBackgroundImage+')' } 
		}
	
	shouldComponentUpdate(nextProps, nextState){ return true;}
  	
	componentWillUpdate(nextProps, nextState){}
	
	
	
	render(){
		 
		return(
				<div id="Stage" style={DisplaybackgroundImage} >
					
					<Stage_Header 
					
						header={this.props.UI.Project.project.H1} 
						subheader={this.props.UI.Project.project.H2}
						headerIcon={this.props.UI.IconPath+this.props.UI.Project.project.HeaderIcon+'-ORANGE.png'} 
						sponsorLogo={this.props.UI.ShowcasePath+'Showcase-Logo-'+this.props.UI.Project.project.Slug+'.png'}
						sponsorURL={this.props.UI.Project.project.SponsorURL}
						
					/>

					<Stage_Left 
						MainCopy={this.props.UI.Project.project.Text}
						Media={this.props.UI.Project.project.Media}
					/>
					
					<Stage_Right 
						PanelHeader={this.props.UI.Project.project.PanelH1}
						MajorIcons = {this.props.UI.Project.project.MajorIcons}
						SmallIcons = {this.props.UI.Project.project.SmallIcons}
						PanelImages ={this.props.UI.Project.project.PanelImages}
						IconPath = {this.props.UI.IconPath}
						ImagePath = {this.props.UI.ShowcasePath}
					/>
				</div>
			)
	}
}