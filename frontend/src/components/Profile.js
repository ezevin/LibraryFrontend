import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class Profile extends Component {

  render (){

    return(
      <div>
        <center className="textMedium">About Me</center>
        <span className="color">Name: {} </span><br /><br />
        <span className="color">Age: {} </span><br /><br />
        <span className="color">About Me: {} </span><br /><br />
        <Button className="color" color="black">Edit My Profile</Button>

      </div>
    )
  }
}

export default Profile
