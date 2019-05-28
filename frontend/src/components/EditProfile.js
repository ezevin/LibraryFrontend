import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const EditProfile = () => (
  <Form color="black" size="large">
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='About Me'
      placeholder='About Me'
    />
    <Form.Field
      id='form-input-control-last-name'
      control={Input}
      label='Profile Picture'
      placeholder='Profile Picture'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
      label='Update Profile'
    />
  </Form>
)

export default EditProfile
