import React from 'react'
import { Table } from 'react-bulma-components'


const UsersTable = ({ fields, users }) => {
  return (
    <Table className='users-table' bordered striped size="fullwidth">
      <thead>
        <tr>
          { fields.map(toHeaderField) }
        </tr>
      </thead>
      <tbody>
        { users.map(toUserRow(fields)) }
      </tbody>
    </Table>
  )
}

const toRowField = (user) => (field, index) => {
  return (
    <td key={index}>
      { user[field] }
    </td>
  )
}

const toHeaderField = (field, index) => {
  return (
    <th key={index}>
      { field }
    </th>
  )
}

const toUserRow = (fields) => (user) => {
  return (
    <tr key={user.id}>
      { fields.map(toRowField(user)) }
    </tr>
  )
}


export default UsersTable
