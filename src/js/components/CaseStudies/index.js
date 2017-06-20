import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import ModalVideo from "../global/ModalVideo";
import ModalOverlay from "../global/ModalOverlay";

let Header,DisplayProjects,Project;

@connect((store) =>{
		return{
			CASESTUDIES: store.CASESTUDIES,
			UI:store.UI
			}
	})
	
export default class CaseStudies extends React.Component {

  	constructor() {  super();  }
	shouldComponentUpdate(nextProps, nextState){ return true;}
	
  	componentWillUpdate(nextProps, nextState){
	
		  	let UI = nextProps.UI;	
		  	let DisplayCS = nextProps.CASESTUDIES.CaseStudies.data;
   			
			Header = DisplayCS.Header;
			Project = DisplayCS.Listprojects
			 
			DisplayProjects = Project.map((project, i)=>{
				 	return(
							<div key={i} class="col-md-3 col-sm-3 col-xs-6 caseItem">
								<ModalOverlay id={"#project_"+i} title={project.title}/>
								<img src={UI.IMGPATH+project.img} class="img-responsive center-block" />
								<ModalVideo Modalid={"project_"+i} videoid={project.video}/>	
							</div>				
					)
			})
	}

  render() {
	
    return (
      	<section id="CaseStudies">
			<div class="container">
       			<SectionHeader text={Header}/>
				{DisplayProjects}
			</div>
		</section>
    );
  }
}
