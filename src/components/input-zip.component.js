import React from 'react';
import axios from 'axios'
import CardList from './plants-display.component'
import '../index.css';

import {Form, Jumbotron, Container, Button } from 'react-bootstrap';
import {geolocated} from 'react-geolocated';

export class InputZip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: '',
            result: [],
            rainfall: '0',
            geolocation: false,
            location: {}
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
                axios.get("https://powerful-hamlet-57295.herokuapp.com/plants/temp/"+temp)
                    .then((result)=>{
                        //console.log(result);
                        this.setState({
                            result,
                            geolocation: false
                        })
                        
                        console.log(this.state.result.data)
                    })
            })

    }

    onGetLoc = () => {

        const weather = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.props.coords.latitude + '&lon=' + this.props.coords.longitude + '&appid=972a36fea83506dc9a292648560b18da'
        axios.get(weather)
            .then((result) => {
                console.log(result.data.main)
                const temp = Math.round(((result.data.main.temp) - 273.15) * 9/5 + 32);
                //console.log(temp)
                axios.get("https://powerful-hamlet-57295.herokuapp.com/plants/temp/"+temp)
                    .then((result)=>{
                        //console.log(result);
                        this.setState({
                            result,
                            geolocation: true
                        })
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
        //console.log(this)
        if(this.props.coords){
            if(this.state.zip === ''){
                //console.log("getting loc")
                this.onGetLoc()
            }
        }
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
                <Jumbotron style={{height: '490px', backgroundColor: "#c1f28f"}}>
                    <Container>
                        <div className='card-list'>
                            {this.state.result.data && this.state.result.data.length ? <CardList plants={this.state.result.data} rainfall={this.state.rainfall} style={{marginTop: 10}}/>: ""}
                        </div>
                    </Container>
                </Jumbotron>
                
               
                
            </div>
        )
        
    }
}

 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(InputZip);