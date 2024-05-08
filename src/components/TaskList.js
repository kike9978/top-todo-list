export default class Tasklist {
    constructor(name, assignedProject = 0, id, color = "#fff") {
        this.name = name
        this.assignedProject = assignedProject
        this.tasks = []
        this.project = ""
        this.id = id
        this.color = color

    }
}