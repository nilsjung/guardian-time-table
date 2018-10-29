import React from 'react'
import { connect } from 'react-redux'

export default class Character extends React.Component {
    render() {
        return (
                <th scope='col' className=''>{this.props.characterName}</th>
        )
    }
}