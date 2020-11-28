import React, { Component } from 'react'


class SubPage extends Component {
    constructor(props){
        super(props);
        this.state = ({
            indice: props.match.params,
            otherValue: props.location.state.index,
            0: { projectName: "Bitcoin App", 
                    image: "https://raw.githubusercontent.com/AndyEstevez/CryptoApp/master/images/24hr_chart.png",
                    description: "An android app that creates an account, view the current pricing of Bitcoin based on CoinAPI. See the historical pricing of Bitcoin by 24 Hour/1 Week/1 Month intervals and view buy/sell transactions the user creates which calculates their Net Cost.",
                    URL: "https://github.com/AndyEstevez/CryptoApp", },
            1: { projectName: "Movie Site", 
                    image: "",
                    description: "",
                    URL: "https://github.com/AndyEstevez/MovieSite", },
            2: { projectName: "Cryptocurrency Site", 
                    image: "",
                    description: "",
                    URL: "https://github.com/AndyEstevez/CryptoSite", },
        })
    }

    
    
    render() {
        let index = (this.state.otherValue)
        return (
            <div>
                <div className="name">{this.state[index].projectName}</div>
                <div className="image"><img src={this.state[index].image}/></div>
                <div className="description">{this.state[index].description}</div>
                <div className="link">{this.state[index].URL}</div>

            </div>
        )
    }
}

export default SubPage;
