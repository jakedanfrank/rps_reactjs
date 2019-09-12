import React, { Component } from 'react';
import { Container, Header, } from "semantic-ui-react";
import  Choices from "./components/Choices";


class App extends Component {
  state = {
    choices: [
      { id: 1, name: "Rock", },
      { id: 2, name: "Paper", },
      { id:3, name: "Scissors", },
    ]
  };

rockChoice = () => {
  
}

  render() {
    return (
      <Container style={{ paddingTop: "35px" }}>
        <Header as="h1" style={{ textAlign: "center" }}>ROCK! - PAPER! - SCISSORS!</Header>
        <Choices choices={this.state.choices} rockChoice={this.rockChoice}/>
      </Container>
        
    )
  }
}

export default App
