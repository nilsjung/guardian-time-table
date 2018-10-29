import React from 'react'
import {connect} from 'react-redux'


import CharacterTable from './components/CharacterTable';

class App extends React.Component {
    render() {
        return (
            <div className='mainContent container'>
                <CharacterTable characters={this.props.characters} tasks={this.props.tasks} />
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

export default connect(mapStateToProps, {})(App)
