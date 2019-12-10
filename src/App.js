import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();//calls the constructor method of the component class
    
    this.state = {
      monsters: [],
      searchField: ''
    };//End of state

  } //End of constructor

  componentDidMount(){
    //fetch only reject on network failure or if anything prevented the request from completing
    //fetch won't receive cross-site cookies, you can’t establish a cross site session
    //fetch won’t send cookies unless you set the credentials init option
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  } //End of componentDidMount

  render(){

    //Desctructuring
    //Pull property out of an object and set them to properties
    //This is used to maintain the original datatset
    const { monsters, searchField} = this.state;

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
            <input type='text' placeholder='Search Monsters' 
            onChange={ 
              event => 
              {
                //set state is asynchronous, use the callback function to trigger further action after se state has finished
                //everytime you call set state it re renders, should not have setstate in a render
                this.setState({ searchField: event.target.value});
              }
            } 
            >
            </input>
          </Col>
          </Container>
        </Row>
        <CardList monsters={ filteredMonsters}></CardList>
      </div>
    ); //End of return
  } //End of render
}

export default App;
