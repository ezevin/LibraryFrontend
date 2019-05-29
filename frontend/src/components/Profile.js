import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import EditProfile from './EditProfile'

class Profile extends Component {

  render (){
    console.log("profile props", this.props.currentUser.username);
    return(
      <div>
        <center className="textMedium">About Me</center>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6m2JQEOmGWnCe5vrZRbbBh-5irazA9TJV3FGWVAVqw3_ePyA"/>
        <span className="color">Name: {this.props.currentUser.username} </span><br /><br />
        <span className="color">Age: 22{} </span><br /><br />
        <span className="color">About Me: I love to read! My favorites are about "Far off places, daring swordfights, magic spells, a prince in disguise" {} </span><br /><br />
        <Link to="/editProfile">
          <Button className="color" color="black">Edit My Profile</Button>
        </Link>

      </div>
    )
  }
}

export default Profile
