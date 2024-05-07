export default class Tasklist {
    constructor(name, assignedProject = 0, id) {
        this.name = name
        this.assignedProject = assignedProject
        this.tasks = []
        this.project = ""
        this.id = id

    }
}