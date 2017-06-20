import React from "react";

export default class MainHeader extends React.Component {
  render() {
	  var Header = this.props.text;
    return (
      <h2 class="text-center">{this.props.text}</h2>
    );
  }
}