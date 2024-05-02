export default class Tasklist {
    constructor(name, assignedProject = 0) {
        this.name = name
        this.assignedProject = assignedProject
        this.tasks = []
        this.project = ""

    }

    addTask(task) {
        this.tasks.push(task)
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId)
    }

    assignProject(project) {
        this.project = project
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