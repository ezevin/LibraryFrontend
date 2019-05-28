import React from 'react'
import { Feed } from 'semantic-ui-react'

const Friends = () => (
  <div className="box">
  <h1> Friends Activity </h1>
  <Feed>
    <Feed.Event
      icon="user secret"
      content='You added BLOOP to the group BookWyrm'
    />
    <Feed.Event>
      <Feed.Label icon="user secret" />
      <Feed.Content content='You added BLAH to the group BookWyrm' />
    </Feed.Event>
  </Feed>
  </div>
)

export default Friends
