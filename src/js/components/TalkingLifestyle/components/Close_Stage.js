import React from "react";
import { connect } from "react-redux";

import {CloseStage} from "../../../actions/"

@connect((store) =>{
		return{
			Content: store.SHOWCASE,
			UI:store.UI
			}
	})
export default class GlobalText extends React.Component {
  closeStage(){ this.props.dispatch(CloseStage()); }	
  render() {
    return (
			<button onClick={() => this.closeStage()}><i class="fa fa-times-circle-o" aria-hidden="true"></i> </button>
	);
  }
}