import React from 'react'
import { connect } from 'react-redux'

export class Task extends React.Component {
    render() {
        const {taskName, characters, taskId} = this.props
        return (
            <tr>
                <th scope='row' className=''><span className='col'><i className={'task-icon ' + this.props.icon}></i></span><span className='col'>{taskName}</span></th>
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

export class AddTask extends React.Component {

    getTaskName = (event) => {
        event.preventDefault();
        const newTaskName = document.getElementById('newTaskInput').value
        if (newTaskName.length > 2) {
            return this.props.addTask(newTaskName);
        } else {
            return ;
        }
    }

    render() {
        return (
            <tr>
                <th>
                    <div className='input-group'>
                        <input type='text' id='newTaskInput' className='form-control' placeholder='enter new task name' />
                        <div className='input-group-append'>
                            <button className='btn btn-outline' type='button' onClick={this.getTaskName}><span><i className='task-icon fa fa-plus'/><span>Add</span></span></button>
                        </div>
                    </div>
                </th>
                <td></td>
            </tr>
        )
    }
}