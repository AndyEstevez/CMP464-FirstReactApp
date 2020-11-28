import React, { Component } from 'react'
import '../css/Subpage.css';

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
                    image: "https://raw.githubusercontent.com/AndyEstevez/MovieSite/master/moviesite%20-%20screenshot.jpg",
                    description: "Movie website presenting popular & top rated movies, search functionality, recommended movies, cast for movie. Used TMDB for the API, React for the front-end.",
                    URL: "https://github.com/AndyEstevez/MovieSite", },
            2: { projectName: "Cryptocurrency Site", 
                    image: "https://raw.githubusercontent.com/AndyEstevez/CryptoSite/master/cryptosite-image.png",
                    description: "Cryptocurrency website showing pricing and basic info of each one. Used CoinGecko for the API, React for the front-end.",
                    URL: "https://github.com/AndyEstevez/CryptoSite", },
        })
    }

    
    
    render() {
        let index = (this.state.otherValue)
        return (
            <div className="background">
                <div className="image-div"><img className="image" src={this.state[index].image}/></div>
                <div className="name">Project Name: {this.state[index].projectName}</div>
                <div className="link">URL: <a href={this.state[index].URL} target="_blank">{this.state[index].URL}</a></div>
                <div className="description">Description: {this.state[index].description}</div>
            </div>
        )
    }
}

export default SubPage;
