import React from 'react';

import Task from './Task'
import Character from './Character'

class CharacterTable extends React.Component {
    render() {

        const {characters, tasks} = this.props

        return (
            <table className='characterTable table table-striped'>
                <thead>
                    <tr className='table-info'>
                        <th scope='col'>
                        </th>
                        {Object.entries(characters).map((key, index) => {
                            const character = key[1];
                            return <Character key={index} characterName={character.charName}></Character>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tasks).map((key, index) => {
                        const task = key[1];
                        return <Task characters={characters} key={index} taskId={key[0]} taskName={task.taskName} icon={task.icon}></Task>
                    })}
                </tbody>
            </table>
        )
    }
}

export default CharacterTable;