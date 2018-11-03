
import {initialState} from '../config/';

import {ADD_TASK} from './../actions/';

export default function (state = initialState, {type, payload}) {
    if (type === ADD_TASK) {
        const taskKey = Object.keys(payload)[0]
        const taskBody = Object.entries(payload)[0][1]
        console.log(taskKey)
        console.log(taskBody)
        const oldTasks = state.tasks;
        const newTasks = {...oldTasks, [taskKey]: taskBody}
        document.getElementById('newTaskInput').value = ''
        return {...state, tasks: newTasks}
    } else {
        return {...state}
    }
}