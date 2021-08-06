import React, { Component } from 'react';
import style from '../Glass/Glass.css' 
import ListOfGlass from './ListOfGlass';

export default class MainGlass extends Component {
    render() {
        return (
            <div className="Glass">
                <div className="text-center title p-3">
                    <h2>TRY GLASSES APP ONLINE</h2>
                </div>
                <div>
                    <ListOfGlass/>
                </div>
            </div>
        )
    }
}
