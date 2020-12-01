import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Project.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

class ProjectsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: [0, 1, 2],
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
        }
    }
    
    render() {
        console.log(this.state[0].image)
        return (
            <div className="proj-container">
                <Grid container spacing={3} style={{  flex: "0 0 33.33%",  display: "flex", padding: "10px" }} justify="center">
                {this.state.index.map(index => (
                        <Card variant="outlined" style={{ maxHeight: "1300px", position:"relative", marginLeft:"600px", marginBottom: "10px", top:"10px", }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.state[index].projectName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {this.state[index].description}
                                </Typography>
                            </CardContent>

                            <CardActionArea>
                                <CardMedia style={{  }}>
                                    <img style={{ maxHeight: "400px", objectFit: "cover",  backgroundPosition: "center", backgroundCover: "cover" }} src={this.state[index].image} title={this.state[index].projectName}/>
                                </CardMedia>
                            </CardActionArea>
                            
                            <CardActions>
                                <Button style={{marginLeft: "270px"}} variant="contained" color="primary" href={this.state[index].URL} target="_blank">
                                    Link to GitHub
                                </Button>
                            </CardActions>
                        </Card>
                ))}
                </Grid>
            </div>
        )
    }
}

export default ProjectsPage;
