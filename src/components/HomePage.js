import React, { Component } from 'react';
import logo from '../wallpaper.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/Homepage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>Andy Estevez</p>
                <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} appear={true}>
                    <img className="img" src={logo} alt="logo"></img>
                </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default HomePage;
