import React, { Component } from 'react'

export class Dog extends Component {
    render() {
        return (
            <div className='dog__item' onClick = {()=>this.props.openModal(this.props.item)} >
                <p>{this.props.item}</p>
            </div>
        )
    }
}

export default Dog
