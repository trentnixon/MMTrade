import React from "react";

export default class VideoModal extends React.Component {
  render() {
    return (
		<div class="modal fade VideoModal " id={this.props.Modalid} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="vertical-alignment-helper">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src={"https://www.youtube.com/embed/"+this.props.videoid} ></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
  }
}