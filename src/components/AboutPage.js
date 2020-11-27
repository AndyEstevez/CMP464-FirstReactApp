import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AboutPage extends Component {
    render() {
        return (
            <div>
                IN ABOUT PAGE
                <br></br>
                <button>
                   <Link to="/Resume.pdf" target="_blank" download>Download</Link>
                </button>
            </div>
        )
    }
}

export default AboutPage;