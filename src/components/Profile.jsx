
import { Component } from "react";
import MyContext from "./MyContext";
import broli from "../assets/broli.jpg"
import ProfileData from "./ProfileData";

class Profile extends Component {
  render () {

    let value = this.context;
    console.log(value)

    //const {age} = this.props
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <p>Age: {value.age} ans</p>
        <img src={broli} alt="Broli" className="img-thumbnail mb-3" />

        <ProfileData name={value.name} age={value.age}/>
      </div>
    )
  }
}
Profile.contextType = MyContext;
console.log(Profile.contextType)

export default Profile
