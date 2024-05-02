export default class Tasklist {
    constructor(name, assignedProject = 0) {
        this.name = name
        this.assignedProject = assignedProject
        this.tasks = []

    }

    addTask(task) {
        this.tasks.push(task)
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId)
    }

    getCompletedTasks() {
        const completedTasks = this.tasks.filter(task => task.status = true)
        return completedTasks
    }
    getPendingTasks() {
        const pendingTasks = this.tasks.filter(task => task.status = false)
        return pendingTasks
    }
}