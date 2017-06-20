import React from "react";

export default class GlobalText extends React.Component {
  render() {
    return (
			<p>{this.props.text}</p>
	);
  }
}