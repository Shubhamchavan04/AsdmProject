import React, { Component, PureComponent } from 'react'

class ComponentOne extends PureComponent {
    render() {
        console.log("Component One");
        const{uname} = this.props;
        return (
            <div>
                <h2>This is Component One</h2>
                <p>My Name is <strong>{uname}</strong></p>
            </div>
        )
    }
}

export default ComponentOne
