import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [{
  title:"Titol nota default",
  content:"Content nota default"
}]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>,
  document.getElementById('root')
)
