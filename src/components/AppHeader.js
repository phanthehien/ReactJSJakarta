/**
 * Created by hien.phanthe on 3/15/17.
 */
import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        var logo = this.props.logo;
        
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Awesome app 111</h2>
            </div>
        )
    }
}

export default AppHeader