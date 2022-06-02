import React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App, { init, update } from './app'


export const main = ({ mountNode }) => {
  const root = createRoot(mountNode)
  const middleware = applyMiddleware(thunk)
  const store = createStore(update, init, middleware)
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  )

  root.render(app)
}
