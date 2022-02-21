import React, { Component } from 'react'


class Act extends Component {
    render() {
        return ( 
            React.createElement('div', { id: 'Akbar' }, React.createElement(
                'h1',
                null,
                'Good night Ali',
               )
            )
        )
    
    }
}

export {Act};