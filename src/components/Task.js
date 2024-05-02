


export default class Task {
    constructor(name, description, dueDate, isImportant, id) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isImportant = isImportant;
        this.subTaskList = [];
        this.status = false;
        this.project = "";
        this.taskList = "";
        this.id = id

    }

    toggleStatus() {
        this.status = !this.status
    }

    assgignProject(projectId) {
        this.project = projectId
    }
    assgignTaskList(taskListId) {
        this.taskList = taskListId
    }

    removeProject() {
        this.project = "";
    }
    removeTaskList() {
        this.taskList = "";
    }

}