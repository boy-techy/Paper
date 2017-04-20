/**
 * Created by yatindra on 20/4/17.
 */

import React from 'react';
import './css/NavBar.css';

export default class NavBar extends React.Component{

    render(){
        return(
            <nav>
                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#exams">Exams</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className="iconMenu">
                    <li><a href="#search">Search</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#calendar">Calendar</a></li>
                </ul>
            </nav>
        )
    }
}