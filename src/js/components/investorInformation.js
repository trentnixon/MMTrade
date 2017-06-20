import React from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation/";
import Contact from "./Contact/";
import SectionText from "./global/SectionText";


var Copy,Header,Docs, workplace,Announcements, II,PDFPATH;
@connect((store) =>{
		return{
			UI:store.UI,
			II: store.II
			}
	})
export default class Layout extends React.Component {
  	constructor() { super();}
	
	componentWillMount(){
		 
		 II = this.props.II.InvestorInformation.data;
		 PDFPATH = this.props.UI.PDFPATH;
		 console.log()
		 Header = II.Header
		 Copy = II.Text.split('\n').map((item, key) => { return <SectionText key={key} text={item}/>})
	
  		 Docs = II.AnnualReports.map((info,i)=>{
					return(
							<li key={"report_"+i}>
								<a href={PDFPATH+'/'+info.File_Name} target="_blank">
									<i class="fa fa-file-pdf-o" aria-hidden="true"></i>
									{info.Display_Name}
								</a>
							</li>
						)
				})

		 workplace = II.workplace.map((info,i)=>{
					return(
							<li key={"report_"+i}>
								<a href={PDFPATH+'/'+info.File_Name} target="_blank">
									<i class="fa fa-file-pdf-o" aria-hidden="true"></i>
									{info.Display_Name}
								</a>
							</li>
						)
				})		
		
		
		Announcements = II.Announcements.map((info,i)=>{
					var FileType = info.File_Name.split('.')
					var displayLink=''
					if(FileType[1] == 'pdf'){ displayLink = PDFPATH+'/'+info.File_Name; }else
					{displayLink = info.File_Name}
					return(
							<li key={"report_"+i}>
								<a href={displayLink} target="_blank">
									<i class="fa fa-file-pdf-o" aria-hidden="true"></i>
									{info.Display_Name}
								</a>
							</li>
						)
				})
		}

  render() {
   return (
   			<div>
				<Navigation {... this.props}/>
					<section class="secondary" id="Information" >
						<div class="container">
							<h1>{Header}</h1>
							{Copy}
							<div class="col-md-12" id="Annual_Reports">
								<div class="row">
									<h1>Annual Reports</h1>
									<ul class="InformationList" id="AnnualReports">{Docs}</ul>
								</div>
							</div>
					
							<div class="col-md-12" id="Work_place">
								<div class="row">
									<h1>Workplace Reports</h1>
									<ul class="InformationList" id="Workplace">{workplace}</ul>
								</div>
							</div>		
							<div class="col-md-12" id="MM_Announcements">
								<div class="row">
									<h1>Announcements</h1>
									<ul class="InformationList" id="Announcements">{Announcements}</ul>
								</div>
							</div>
						</div>
					</section>
					<Contact />
		</div>
	);
  }
}
