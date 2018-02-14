import React from 'react'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import axios from 'axios'
import { identity, merge } from './utils'
import UsersContent from './users/content'
import UsersSearchBar from './users/search_bar'


// Api Endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/users'


// Initial State

const init = {
  error: false,
  fields: [ 'name', 'email' ],
  filter: '',
  loaded: false,
  users: []
}


// Actions & Action Creators

export const Actions = {
  Fetch: { type: Symbol('Users.Fetch') },
  Success: { type: Symbol('Users.Success') },
  Failure: { type: Symbol('Users.Failure') },
  Filter: { type: Symbol('Users.Filter') }
}

const success = (value) => {
  return merge(Actions.Success, {
    data: value
  })
}

const failure = (value) => {
  return merge(Actions.Failure, {
    data: value
  })
}

const fetch = (dispatch) => {
  dispatch(Actions.Fetch)

  axios.get(endpoint)
    .then((repsonse) => {
      const action = success(repsonse.data)

      // artificially slowing down the response to show the loader.
      setTimeout(() => {
        dispatch(action)
      }, 1000)
    })
    .catch((error) => {
      const action = failure(error)
      dispatch(action)
    })
}

const filter = (value) => {
  return merge(Actions.Filter, {
    data: value
  })
}


// Update

const isType = (a, b) => {
  return a.type === b.type
}

const update = (state = {}, action = {}) => {
  if (isType(action, Actions.Fetch)) {
    return merge(state, {
      loaded: false
    })
  }

  if (isType(action, Actions.Success)) {
    return merge(state, {
      loaded: true,
      users: action.data
    })
  }

  if (isType(action, Actions.Failure)) {
    return merge(state, {
      loaded: true,
      error: true
    })
  }

  if (isType(action, Actions.Filter)) {
    return merge(state, {
      filter: action.data
    })
  }

  return state
}


// View

const view = (props) => {
  const { dispatch, fields } = props

  const users = props.filter
    ? filterUsers(props.filter)(props.users)
    : props.users

  return (
    <div>
      <UsersSearchBar onChange={onChange(dispatch)} />
      <UsersContent {...props} users={users} />
    </div>
  )
}


// View Helpers

const onChange = (dispatch) => (event) => {
  const value = event.target.value
  dispatch(filter(value))
}

const filterUsers = (input) => (users) => {
  return users.filter((user) => {
    const inputName = input.toLowerCase()
    return user.name
      .toLowerCase()
      .includes(inputName)
  })
}


// Container

const mapState = (state) => (state.users)

const viewWithData = lifecycle({
  componentDidMount() {
    this.props.dispatch(fetch)
  }
})(view)

const container = connect(mapState)(viewWithData)


export default container
export { container, init, update }
