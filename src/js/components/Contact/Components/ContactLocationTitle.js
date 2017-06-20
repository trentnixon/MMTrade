import React from "react";

export default class ContactH2Title extends React.Component {
  constructor() {super();}

  render() { 
    return (<h2>{this.props.text}</h2> );
  }
}
