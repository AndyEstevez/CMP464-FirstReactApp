import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Project.css';

class ProjectsPage extends Component {
    
    render() {
        return (
            <div className="proj-container">
                <div>Projects: </div>
                {/* <div><a href={`/projects/${1}`}>Bitcoin App</a></div>
                <div><a href={`/projects/${2}`}>Movie Site</a></div>
                <div><a href={`/projects/${3}`}>Cryptocurrency Site</a></div> */}
                <div className="proj1"><Link to={{pathname: '/projects/Bitcoin-App', state: {index: 0} }}>Bitcoin App</Link></div>
                <div className="proj2"><Link to={{pathname: '/projects/Movie-Site', state: {index: 1} }}>Movie Site</Link></div>
                <div className="proj3"><Link to={{pathname: '/projects/Cryptocurrency-Site', state: {index: 2} }}>Cryptocurrency Site</Link></div>
            </div>
        )
    }
}

export default ProjectsPage;
