import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div>About Me: </div>
                <div>Resume: </div>
                <button>
                   <Link className="download-btn" to="/Resume.pdf" target="_blank" download>Download</Link>
                </button>
            </div>
        )
    }
}

export default AboutPage;