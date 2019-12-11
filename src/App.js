import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  //runs first
  constructor() {
    super();//calls the constructor method of the component class

    this.state = {
      monsters: [],
      searchField: ''
    };//End of state

    //this.handleChange = this.handleChange.bind(this);

  } //End of constructor

  componentDidMount() {
    //fetch only reject on network failure or if anything prevented the request from completing
    //fetch won't receive cross-site cookies, you can’t establish a cross site session
    //fetch won’t send cookies unless you set the credentials init option
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  } //End of componentDidMount

  /*
  handleChange(event){
    this.setState({searchField: event.target.value})
  }
  */

  //using ES6 arrow functions
  //arrow functions allow to set this when handleChange is being defined
  //where the arrow function was defined
  //lexical scoping
  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {

    //Desctructuring
    //Pull property out of an object and set them to properties
    //This is used to maintain the original datatset
    const { monsters, searchField } = this.state;
    //Filter
    //Includes
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))

    return (
      <div className='App'>
        <Row className='p-2'>
          <Container>
            <Col>
            <h1 className='text-white'>Monsters Rolodex</h1>
            </Col>
            <Col>
              <SearchBox
                placeholder='search monsters'
                handleChange={this.handleChange}>
              </SearchBox>
            </Col>
          </Container>
        </Row>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    ); //End of return
  } //End of render
}

export default App;
