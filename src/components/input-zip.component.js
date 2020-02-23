import React from 'react';
import axios from 'axios'
import CardList from './plants-display.component'

import {Form, Jumbotron, Container } from 'react-bootstrap';

export default class InputZip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            result: [],
            rainfall: '0'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputZIP = this.onInputZIP.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const weather = 'https://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip + ',us&appid=972a36fea83506dc9a292648560b18da'
        axios.get(weather)
            .then((result) => {
                //console.log(result.data.main)
                const temp = Math.round(((result.data.main.temp) - 273.15) * 9/5 + 32);
                //console.log(temp)
                axios.get("http://localhost:4000/plants/temp/"+temp)
                    .then((result)=>{
                        //console.log(result);
                        this.setState({result})
                        console.log(this.state.result.data)
                    })
            })

    }

    onInputZIP(e){
        this.setState({
            zip: e.target.value
        })
    }
    

    onInputRainfall = (e) => {
        this.setState({
            rainfall: e.target.value
        })
    }



    render() {
        return(
            <div style={{marginTop: 10}}>
                <h6>Input Your Zip Code</h6>
                <form onSubmit={this.onSubmit} style={{}}>
                    <input type="text"
                           className='form-control'
                           value={this.state.zip}
                           onChange={this.onInputZIP}
                           />
                    <Form.Label>Rainfall levels</Form.Label>
                    <Form.Control as="select" onChange={this.onInputRainfall}>
                        <option value="0">N/A</option>
                        <option value="1">Arid</option>
                        <option value="2">Light</option>
                        <option value="3">Moderate</option>
                        <option value="4">Rainy</option>
                        <option value="5">Heavy</option>
                    </Form.Control>
                </form>
                <Jumbotron>
                    <Container>
                        {this.state.result.data && this.state.result.data.length ? <CardList plants={this.state.result.data} rainfall={this.state.rainfall} style={{marginTop: 10}}/>: ""}
                    </Container>
                </Jumbotron>
               
                
            </div>
        )
        
    }
}