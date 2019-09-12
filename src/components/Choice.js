import React, { Component } from 'react'




class Choice extends Component {
  
  
  const Choice = () => (
    <Card.Group itemsPerRow={3}>
  <Card href onClick={this.props.rockChoice}> {" "}
    {this.props.choice.name}
    <Image src="https://www.algaebarn.com/wp-content/uploads/2018/05/masked-live-rock.png"/>
    <Card.Content>
      <Card.Header style={{ textAlign: "center" }}>ROCK</Card.Header>
    </Card.Content>
  </Card>
  <Card href>
    <Image src="https://cdn2.bigcommerce.com/server4700/13c63/products/30/images/2079/PRT79230_1_Trans_1000x1000__40340__13541__18109.1358958042.1280.1280.png?c=2"/>
    <Card.Content>
      <Card.Header style={{ textAlign: "center" }}>PAPER</Card.Header>
    </Card.Content>
  </Card>
  <Card href>
    <Image src="https://target.scene7.com/is/image/Target/GUEST_a43de8c9-759d-4856-b06b-d75ec6cef1ea?wid=488&hei=488&fmt=pjpeg"/>
    <Card.Content>
      <Card.Header style={{ textAlign: "center" }}>SCISSORS</Card.Header>
    </Card.Content>
  </Card>
  </Card.Group>

)

rockChoice = (e) => {

}

  render() {
    return (
      <div>
        <h1>{this.props.choice.name}</h1>
      </div>
    )
  }


export default Choice
