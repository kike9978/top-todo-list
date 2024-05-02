import generateUniqueId from "../utils/generateUniqueId"

export default class Project {
    constructor(name) {
        this.name = name
        this.taskList = []
        this.taskListList = []
        this.id = generateUniqueId()

    }

    addTask(task) {
        this.taskList.push(task)
    }
    removeTask(taskId) {
        this.taskList = this.taskList.filter(task => task.id !== taskId)
    }

    addList(list) {
        this.taskListList.push(list)
    }
    removeList(listId) {
        this.taskListList = this.taskListList.filter(list => list.id !== listId)
    }
}
