/**
 * Created by hien.phanthe on 3/15/17.
 */

import React, {Component} from 'react'

class Counter extends Component {
    render() {
        const {counterValue} = this.props;

        return (
            <h1> {counterValue} </h1>
        )
    }
}

export default Counter;