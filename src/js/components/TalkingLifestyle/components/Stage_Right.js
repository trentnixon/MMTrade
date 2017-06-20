import React from "react";

import SectionImage from "../../global/SectionImage";

var SmallIcons, MajorIcons, PanelImages;

export default class GlobalText extends React.Component {
	
	
	
	ImageSizing(num){
		var ColSize;
		switch (num) {
				case 0: ColSize = 12;
				break;
				case 1: ColSize =  12;
				break;
				case 2:ColSize =  6;
				break;
			}
			return ColSize;
		}	
	
	componentWillMount(){
	
		var MajorIconSize = Object.keys(this.props.MajorIcons).length;
		var PanelImagesSize = Object.keys(this.props.PanelImages).length;
		var SmallIconsSize = Object.keys(this.props.SmallIcons).length;	
	
		//PanelImages
		PanelImages = this.props.PanelImages.map((image,i)=>{
			
		  	var DisplayImage = this.props.ImagePath+image;
			var ColNum = this.ImageSizing(PanelImagesSize);
			var LayoutClass = 'col-sm-'+ColNum+' col-md-'+ColNum+' SupportingImage';
			
		  	return(
					<div class={LayoutClass} key={'image_'+i}>
						<SectionImage img={DisplayImage} AddClass="img-responsive center-block" />
					</div>
				)
		  
		  })
		  
		  
		// Create Major Icons		
		MajorIcons = this.props.MajorIcons.map((icon,i)=>{
			
		  	var DisplayIcon = this.props.IconPath+icon+"-WHITE.png"
		  	return(
					<div class="col-md-3 col-sm-3 Majoricon" key={'icon_'+i}>
						<img src={DisplayIcon} />
					</div>
				)
		  
		  })
		
		
		// Create Small Icons
		SmallIcons = this.props.SmallIcons.map((icon,i)=>{
		  	var DisplayIcon = this.props.IconPath+icon+"-WHITE.png"
		  	return(
					<div class="col-md-3 col-sm-3 Smallicon" key={'icon_'+i}>
						<img src={DisplayIcon} />
					</div>
				)
		  
		  })
  }
	
  render() {
	  
    return (
			<div class="col-md-6 col-sm-6 hidden-xs" id="Stage_Right">
				<div class="transparentDiv">
					<div class="container-fluid nopadding">
						
						<div class="col-md-12 nopadding">
							{MajorIcons}
							<h2 class="PanelHeading">{this.props.PanelHeader}</h2>
						</div>
					
						<div class="col-md-12 nopadding supportingContent">
							{PanelImages}
						</div>

						{SmallIcons}
					</div>
				</div>
			</div>
	);
  }
}