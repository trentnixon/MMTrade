import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";


let Header, Copy, DisplayMediaKit,FetchMediaKit,Surveys;

@connect((store) =>{
		return{
			MEDIAKIT: store.MEDIAKIT,
			UI: store.UI
			}
	})
export default class MediaKits extends React.Component {
	
	constructor() {super(); }

  	shouldComponentUpdate(nextProps, nextState){ return true;}

	componentWillMount(){ this.forceUpdate(); }
  	componentWillUpdate(nextProps, nextState){ 

			var LogoPath = nextProps.UI.IMGPATH;
			var PDFPath = nextProps.UI.PDFPATH; 
			FetchMediaKit = nextProps.MEDIAKIT.mediakit.data;
			Surveys  = FetchMediaKit.List;

			DisplayMediaKit = Surveys.map((survey, i)=>{
					var DivClass="col-md-2  col-sm-2 col-xs-6 DisplaymediaKits text-center";
					if(i==0){
						DivClass="col-md-2  col-md-offset-1  col-sm-offset-1 col-sm-2 col-xs-6 DisplaymediaKits text-center"
					}
					
					return(
							<div key={i} class={DivClass}>
								<a href={PDFPath+survey.pdf} target="_blank">
									
									<div class="overlay"> 
										<div>
											<i class="fa fa-cloud-download" aria-hidden="true"></i>
											<h3>Download the {survey.title} Media kit</h3>
										</div>
									</div>
								
									<SectionImage img={LogoPath+survey.logo} AddClass="img-responsive center-block"/>
								</a>
							</div>
					)
				})
				
			Header = <SectionHeader text={FetchMediaKit.Header}/>
			Copy = <SectionText text={FetchMediaKit.Text}/>	
	}

  render() {
	  
    return (
				<div id="MediaKits" class="text-center">
					{Header}
					{Copy}
					{DisplayMediaKit}
				</div>
    );
  }
}
