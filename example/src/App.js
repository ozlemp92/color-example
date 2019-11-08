import React, { Component } from 'react'

import ExampleComponent from 'colors'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='özzz' color={"red"} />
        <ExampleComponent text='yaşo' color={"blue"} />
      </div>
    )
  }
}
