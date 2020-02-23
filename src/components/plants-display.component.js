import React from 'react'
import {Card, Button} from 'react-bootstrap';

const CardList = props => {
    const {plants} = props;

    if(plants.length> 0){
        return plants.map(item => 
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.plant_image} />
            <Card.Body>
                <Card.Title>{item.plant_name}</Card.Title>
                <Card.Text>
                {item.plant_desc}
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
            </Card>
        )
        
    }
    else{
        return <h1>plants dne</h1>
    }
}


export default CardList
