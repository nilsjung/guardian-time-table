import React from 'react'
import {connect} from 'react-redux'

import * as taskAction from './actions/'

import CharacterTable from './components/CharacterTable';

class App extends React.Component {
    render() {
        return (
            <div className='mainContent container'>
                <CharacterTable characters={this.props.characters} tasks={this.props.tasks} addTask={this.props.addTask} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        tasks: state.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (taskName) => dispatch(taskAction.addTask(taskName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
