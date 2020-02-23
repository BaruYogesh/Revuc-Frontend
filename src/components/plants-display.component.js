import React from 'react'
import {Card, Button} from 'react-bootstrap';

const rainLevels = ['arid', 'light', 'moderate', 'rainy', 'heavy']
const CardList = props => {
    let {plants} = props;
    let {rainfall} = props;
    rainfall-=1

    console.log(rainfall)

    if(rainfall !== -1){
        plants = plants.filter(item => rainLevels[rainfall] === item.plant_rainfall)
    }
    if(plants.length > 0){
        return plants.map(item => 
            
            <Card style={{ width: '18rem'}}>
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
        return <h1>No plants for your query</h1>
    }
}


export default CardList
