import React from 'react';
// import './card-list.styles.css';
import 'react-bootstrap';
import { Card, Container, Row, Col, CardGroup } from 'react-bootstrap';

//props include a property called children that is anything in between html tags
export const CardList = (props) => {
    return (
        <Row>
            <Container>
                {
                    <CardGroup>
                        {
                            props.monsters.map(monster => (
                                <Col sm={3} key={monster.id} className='p-2'>
                                    <Card key={monster.id} className='shadow bg-light'>
                                        <Card.Img variant='top' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}></Card.Img>
                                        <Card.Header><b>{monster.name} {props.monsters.indexOf(monster)}</b></Card.Header>
                                        <Card.Body>
                                            <Card.Text>{monster.email.toLowerCase()}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </CardGroup>
                }
            </Container>
        </Row>
    );
}//End of card list