import React from "react";

export default class GlobalImage extends React.Component {
  render() {
    return (
			<img src={this.props.img} class={this.props.AddClass}/>
	);
  }
}