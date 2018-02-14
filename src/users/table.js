import React from 'react'
import { Table } from 'bloomer'


const UsersTable = ({ fields, users }) => {
  return (
    <Table className='users-table' isBordered isStriped isFullWidth>
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
