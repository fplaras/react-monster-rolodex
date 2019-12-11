import React from 'react';
import './card-list.styles.css';
import 'react-bootstrap';
import { Card, Container, Row, CardColumns } from 'react-bootstrap';

//props include a property called children that is anything in between html tags
export const CardList = (props) => {
    return (
        /*<div className='card-list'>{props.children}</div>*/
        /*<div className='card-list'>
            {
                props.monsters.map(monster => (
                <h1 key={ monster.id }> { monster.name } </h1>
                ))
            }
        </div>*/
        <Row>
            <Container>
                <CardColumns>
                {
                    props.monsters.map(monster => (
                        <Card key={monster.id} className='shadow bg-light'>
                            <Card.Img variant='top' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}></Card.Img>
                            <Card.Header><b>{monster.name}</b></Card.Header>
                            <Card.Body>
                                <Card.Text>{monster.email.toLowerCase()}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
                </CardColumns>
            </Container>
        </Row>
    );
}//End of card list