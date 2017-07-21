import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";
import ModalVideo from "../global/ModalVideo";
import ModalOverlay from "../global/ModalOverlay";

var  Header, Playlist, DisplayVideos,VideoStore;

@connect((store) =>{
		return{
			SHOWREELS:store.SHOWREELS,
			UI: store.UI
			}
	})
export default class Showreels extends React.Component {

  	shouldComponentUpdate(nextProps, nextState){ return true;}

  	componentWillUpdate(nextProps, nextState){
		
			VideoStore = nextProps.SHOWREELS.Showreels.data;
			var ImgPath = nextProps.UI.IMGPATH;
			
			Header = VideoStore.Header;
			Playlist = VideoStore.Showreels;
			
			DisplayVideos = Playlist.map((videos, i)=>{
				return(
					<div key={"Video_"+i} class="col-md-3 col-sm-3 col-xs-6 caseItem">
						<ModalOverlay id={"#video_"+i} title={videos.title}/>
						<SectionImage 
							img={ImgPath+videos.thumbnailID} 
							AddClass="img-responsive center-block"/>
						<ModalVideo Modalid={"video_"+i} videoid={videos.videoUrl}/>					
					</div>
						)
					})
				} 
  render() {
	  	return (
					<div>
						<SectionHeader text={Header}/>
						{DisplayVideos}
					</div>
			);
  	}
}
