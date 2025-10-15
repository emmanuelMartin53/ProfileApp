import { Component } from 'react'
import Profile from "./components/Profile"
import MyContext from "./components/MyContext"
import './App.css'

class App extends Component {

  state = {
    name: "Broli",
    age: 24
  }

  render () {
    const {name, age} = this.state
    return (
      <MyContext.Provider value={{name, age}}>
        <Profile name={name} age={age}/>
      </MyContext.Provider>
    )

  }

}

export default App
