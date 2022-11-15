import React from "react";
import myImage from "./me.jpg";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Components/Cards";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: false,
      person: {
        fullName: "Houssem Rouabeh",
        bio: "Jeune Tunisien et Future développeur",
        imgSrc: myImage,
      },
    };
  }
  toggleVisibility = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.toggleVisibility}>
          {this.state.shows ? "Hide Card" : "Show Card"}
        </Button>
        {this.state.shows && (
          <Cards
            image={this.state.person.imgSrc}
            bio={this.state.person.bio}
            name={this.state.person.fullName}
          />
        )}
      </div>
    );
  }
}
