import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import ShowcaseStage from "./components/Stage"


var DisplayProjects,UI,Header,ShowCaseStore,Stage;

// Fetch Actions
import {ShowStage,SelectedShowcase} from "../../actions/"

	@connect((store) =>{
		return{
				Content: store.SHOWCASE,
				UI:store.UI
			}
	})
	
export default class Showcase extends React.Component {
  
  	constructor() {
    	super();	
	}
 
	componentWillMount(){}
	
	shouldComponentUpdate(nextProps, nextState){ return true;}

	componentWillUpdate(nextProps, nextState){
		
		// Get the new Props
		UI = nextProps.UI;
		ShowCaseStore = nextProps.Content.Showcase.data.Showcase.Showcase[0];
		var  Project = ShowCaseStore.Listprojects;
		console.log(Project);
		// Show Header
		Header = <SectionHeader text={ShowCaseStore.Header}/> ;
		
		// Create Showcase
		DisplayProjects = Project.map((project, i)=>{
			
					// Create Thumb
					var Thumbnail = 'Showcase-Thumb-'+project.Slug+'.jpg';
			
				 	return(
						<div key={i} onClick={()=>this.DipatchShowStage(project)} class="col-md-4 col-sm-4 col-xs-6 showcaseItem">
							<div class="overlay"> 
								<div>
									<i class="fa fa-search-plus" aria-hidden="true"></i>
									<h3>Find our more about {project.H1}</h3>
								</div>
							</div>
							<img src={UI.ShowcasePath+Thumbnail} alt="" class="img-responsive" />
							
						</div>
					)
			})
		// If the UI state changes
		if(UI.Stage) { Stage = <ShowcaseStage />;} else{ Stage='';}
	}


  componentDidMount(){}

  DipatchShowStage(project){ 
  		//console.log(project)
		
		this.props.dispatch(ShowStage())
		this.props.dispatch(SelectedShowcase(project))
	}
	
  
  render() {

		return (
					<section id="TalkingLifestyle" class="secondary">
						<div class="container">
							{Stage}
							{Header}
							{DisplayProjects}
						</div>
					</section>
				);

  
  }
}
