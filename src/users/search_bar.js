import React from 'react'
import { Form, Icon, Panel } from 'react-bulma-components'


const UsersSearchBar = ({ onChange }) => {
  return (
    <Panel.Block className='users-search-bar'>
      <Form.Control>
        <Icon size='small' align='left'>
          <span className='fa fa-search' />
        </Icon>
        <Form.Input placeholder='Search by name' onChange={onChange}/>
      </Form.Control>
    </Panel.Block>
  )
}


export default UsersSearchBar
