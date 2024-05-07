export default class Project {
    constructor(name, id, color = "#fff", taskList = []) {
        this.name = name
        this.taskList = taskList
        this.id = id
        this.color = color

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
