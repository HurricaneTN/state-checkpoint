import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      intervall: null,
    };
  }
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000),
    });
  }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title className="title">{this.props.name}</Card.Title>
            <Card.Text className="text">{this.props.bio}</Card.Text>
            <Card.Text>{this.state.time}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
