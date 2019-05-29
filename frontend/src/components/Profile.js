import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import EditProfile from './EditProfile'

class Profile extends Component {

  render (){
    console.log("profile props", this.props.currentUser.username);
    return (this.props.users.map(user =>{
      if(this.props.currentUser.id === user.id){
        return(
          <div>
            <center className="textMedium">About Me</center>
            <Image src={user.picture}/>
            <span className="color">Name: {user.name} </span><br /><br />
            <span className="color">Age: {user.age} </span><br /><br />
            <span className="color">About Me: "{user.about_me}" </span><br /><br />
            <Link to="/editProfile">
              <Button className="color" color="black">Edit My Profile</Button>
            </Link>

          </div>
        )
      }
    }))
  }
}

export default Profile
