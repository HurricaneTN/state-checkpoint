import { Component } from "react";
import "./App.css";
import Test from "./Test";
import MyImage from "../src/me.jpg";

export default class App extends Component {
  state = {
    fullName: "Houssem Rouabeh",
    bio: "Je suis Houssem Rouabeh la plupart d’entre vous me connaissent, évidement un étudiant comme vous tous, mais aussi pour celui qui ne me connait pas je suis un professionnel dans le domaine de l’IT.",
    imgSrc: { MyImage },
    profession: "IT Manager",
    show: true,
  };
  render() {
    return (
      <div>
        <img src={MyImage} alt="moi" />
        {console.log(this.state.imgSrc)}
      </div>
    );
  }
}
