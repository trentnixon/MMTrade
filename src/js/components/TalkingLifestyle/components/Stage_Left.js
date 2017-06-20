import React from "react";

export default class GlobalText extends React.Component {
  render() {
    return (
			<div class="col-md-6 col-sm-6" id="Stage_Left">
				
				<div class="TextBox">
					{this.props.MainCopy.split('\n').map((item, key) => {
					  return <p key={key}>{item}</p>
					})}
				</div>
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src={"https://www.youtube.com/embed/"+this.props.Media} />
				</div>
			</div>
	);
  }
}