import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Segment, Button } from 'semantic-ui-react'

const initialState = {
  error: false,
  fields: {
    username: '',
    password: ''
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = initialState
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault()
    // console.log(this.state.fields);
    fetch('http://localhost:3001/api/v1/auth', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        this.setState({error: true})
      } else {
        this.props.handleUserLogin(data)
        this.props.history.push("/library")
      }
    })
  };

  render() {
    console.log('Login props', this.props);
    const { fields } = this.state
    return (
      <div>
        <div className="ui form error">
          {
            this.state.error &&
            <div className="ui error message">
              Try Again
            </div>
          }
          <center>
            <Form size='medium' onSubmit={this.handleSubmit}>
               <Form.Input width={6}
                 fluid icon='user'
                 iconPosition='left'
                 placeholder='Username'
                 onChange={this.handleChange}/>
               <Form.Input width={6}
                 fluid icon='lock'
                 iconPosition='left'
                 placeholder='Password'
                 type='password'
                 onChange={this.handleChange}
               />
               <Button color='black' >
                 Login
               </Button>
           </Form>
         </center>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
