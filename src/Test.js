import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("did Mount");
  }
  render() {
    console.log("render");
    return <div>Test</div>;
  }
}
