import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Form from './Form'
import List from './List'
import Validate from './Auth';
export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path='/' component={List}></Route>
            <Route path='/form' component={Form}></Route>
            <Route path='/validate' component={Validate}></Route>
        </Switch>
      </main>
    )
  }
}
