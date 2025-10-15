
import { Component } from "react";
import broli from "../assets/broli.jpg"
import ProfileData from "./ProfileData";

class Profile extends Component {
  render () {
    const {age} = this.props
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <img src={broli} alt="Broli" className="img-thumbnail mb-3" />

        <ProfileData name={this.props.name} age={age}/>
      </div>
    )
  }
}

export default Profile
