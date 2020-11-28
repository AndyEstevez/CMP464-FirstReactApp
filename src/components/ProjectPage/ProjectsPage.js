import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class ProjectsPage extends Component {
    
    render() {
        return (
            <div>
                IN THE PROJECTS SECTION
                <br></br>
                {/* <div><a href={`/projects/${1}`}>Bitcoin App</a></div>
                <div><a href={`/projects/${2}`}>Movie Site</a></div>
                <div><a href={`/projects/${3}`}>Cryptocurrency Site</a></div> */}
                <Link to={{pathname: '/projects/Bitcoin-App', state: {index: 0} }}>Bitcoin App</Link><br></br>
                <Link to={{pathname: '/projects/Movie-Site', state: {index: 1} }}>Movie Site</Link><br></br>
                <Link to={{pathname: '/projects/Cryptocurrency-Site', state: {index: 2} }}>Cryptocurrency Site</Link>
            </div>
        )
    }
}

export default ProjectsPage;
