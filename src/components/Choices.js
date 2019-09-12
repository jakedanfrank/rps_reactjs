import React, { Component } from 'react';
import { Card, Image, } from 'semantic-ui-react'
import Choice from "./components/Choice";


class Choices extends Component {
  rockChoice = () => {

  }
}


render() {
  return this.props.choices.map((choice) => (
    <h2>{ choice.name}</h2>
    <Choice key={choice.id} choice={choice} rockChoice={this.props.rockChoice}/>
   ));
  }
}

export default Choices