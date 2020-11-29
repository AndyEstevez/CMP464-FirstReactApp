import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h2>About Me: </h2>
                <h4 className="info">Born and raised in Bronx, NY, currently getting a B.S. in Computer Science from Lehman College.
                    Learning front-end development with the React library. Interested in learning back-end development 
                    frameworks and its programming languages.
                </h4>
                <br></br>
                <h2>Resume: <button>
                   <Link className="download-btn" to="/Resume.pdf" target="_blank" download>Download</Link>
                </button></h2>
                
            </div>
        )
    }
}

export default AboutPage;