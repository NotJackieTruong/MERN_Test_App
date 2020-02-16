import React, { Component } from 'react';
import logo from './logo.svg';
// import Component
import NavBar from './components/NavBar'
import Toc from './components/Toc'
import Ad from './components/Ad'
import Items from './components/Item'

import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
const Content = styled.div.attrs({
  className: 'content'
})`
  padding: 2%;
  height: auto;
`
class App extends Component {
  state = {
    items: [
      { name: 'Iphone', price: '25$', amount: '35' },
      { name: 'Aphone', price: '35$', amount: '345' },
      { name: 'Bphone', price: '55$', amount: '37' }
    ]
  }
  render() {
    return (
      <div>
        <div className="navbabr">
          <NavBar></NavBar>
        </div>
        <Content>
          <Toc />
          <Ad />
          <Items items={this.state.items}/>
        </Content>

      </div >

    );
  }

}

export default App;
