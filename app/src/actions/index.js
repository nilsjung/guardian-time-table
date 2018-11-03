export const ADD_TASK = 'add-task'

const createTaskId = (taskName) => {
    taskName = taskName.toLowerCase()
    return taskName.replace(/\s+/g, '')
}

export const addTask = (taskName) => {
    let newTask = {
        [createTaskId(taskName)]: {
            taskName: taskName,
            icon: 'fa fa-plus'
        }
    }
    return {
        type: ADD_TASK,
        payload: newTask
    }
}