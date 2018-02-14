import React from 'react'
import { combineReducers } from 'redux'
import { Box, Container, Section, Title } from 'bloomer'
import * as Users from './users'


// Init

const init = {
  users: Users.init
}


// Update

const update = combineReducers({
  users: Users.update
})


// View

const view = (props) => {
  const UsersContainer = Users.container

  return (
    <Section>
      <Container className='app-container'>
        <Box className='app'>
          <Title>Demo</Title>
          <UsersContainer />
        </Box>
      </Container>
    </Section>
  )
}


export default view
export { init, update }
