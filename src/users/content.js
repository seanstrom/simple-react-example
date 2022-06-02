import React from 'react'
import { Icon } from 'react-bulma-components'
import UsersTable from './table'


const Loading = () => {
  return (
    <div className='users-loading-screen'>
      <Icon size='large'>
        <span className='fa fa-spinner fa-spin' />
      </Icon>
    </div>
  )
}

const Error = () => {
  return (
    <div className='users-error-screen'>
      <span>No Users Retrieved</span>
    </div>
  )
}

const UsersContent = ({ error, fields, loaded, users }) => {
  if (error) {
    return <Error />
  }

  if (!loaded) {
    return <Loading />
  }

  return <UsersTable fields={fields} users={users} />
}


export default UsersContent
