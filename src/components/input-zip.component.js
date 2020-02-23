import React from 'react';
import axios from 'axios'

export default class InputZip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zip: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputZIP = this.onInputZIP.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        const weather = 'https://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip + ',us&appid=972a36fea83506dc9a292648560b18da'
        axios.get(weather)
            .then((result) => {
                console.log(result.data.main)
                const temp = ((result.data.main.temp) - 273.15) * (9/5 + 32);
                //axios.get("http://localhost:4000/")
            })

    }

    onInputZIP(e){
        this.setState({
            zip: e.target.value
        })
    }


    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3>Input Your Zip Code</h3>
                <form onSubmit={this.onSubmit} style={{}}>
                    <input type="text"
                           className='form-control'
                           value={this.state.zip}
                           onChange={this.onInputZIP}
                           />
                </form>
                
            </div>
        )
        
    }
}