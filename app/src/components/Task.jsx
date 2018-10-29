import React from 'react'
import { connect } from 'react-redux'

@connect(state => state)
export default class Task extends React.Component {
    render() {
        const {taskName, characters, taskId} = this.props
        return (
            <tr>
                <th scope='row' className=''><span className='col'><i className={this.props.icon}></i></span><span className='col'>{taskName}</span></th>
                {Object.entries(characters).map(function (key, index) {
                        const character = key[1];
                        if (character.butterflies) {
                            return <td key={index}>{character.butterflies[taskId]}</td>
                        }
                        else return <td key={index}></td>
                    })
                }
            </tr>
        )
    }
}
