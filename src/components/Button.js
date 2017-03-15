/**
 * Created by hien.phanthe on 3/15/17.
 */

import React, { Component, PropTypes } from 'react'


class Button extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {

        var {onClick, numberOfClick, title} = this.props;

        return (
            <button onClick={onClick}>{title} </button>
        )
    }
}

Button.propTypes = {
    title : PropTypes.string.isRequired,


};

Button.defaultProps = {
    title: "[not value set]"
}



export default Button;