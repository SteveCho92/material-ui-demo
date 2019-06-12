import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch, withRouter} from 'react-router-dom';
import Table from './components/Table';
import Writers from './components/Writers';
import DrawerLayout from './layouts/DrawerLayout';

export default class extends Component {
  state = {
    writers: []
  }
//need async keyword for when function has await for async calls
  async componentDidMount() {
    //await allows async calls to be synchronous
    const writers = await (await fetch('http://localhost:3004/writers')).json();
    //setState is async fxn, and needs to await for writers to be fetched first
    this.setState({writers});
    console.log(writers);
    // fetch('http://localhost:3004/writers')
    //   .then(res => res.json())
    //   .then(writers => this.setState({writers}))
  }

  render() {
    //destructures writers from state.  Extracts writers property from the state
    const {writers} = this.state;
    //need to wrap the entire App with BrowserRouter to enable routing
    //<Link> is similar to <a href ="url"> but does not refresh the whole browser to load html/css/js
    //<Fragment> is used when you don't want to wrap elements in outer <div>
    //<Route> is to render UI when a path matches router's path
    return <BrowserRouter>
      <DrawerLayout writers={writers}>
        {/*Switch cases for Route, will only match and render one of them*/}
        <Switch>
          <Route exact path="/" render = {() => <div>Home</div>}/>
          
          {/*{...props} allows to merge old prop values with writers to pass one unified prop to Writers
              Writers is wrapped by Route and will have match, location and history for its props*/}
          <Route path="/writers" render = {props => <Writers {...props} writers={writers} />}/>
          <Route render = {() => <div>404 Not Found</div>}/>
        </Switch> 
      </DrawerLayout>
    </BrowserRouter>
  }
}