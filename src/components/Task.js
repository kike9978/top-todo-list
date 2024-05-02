


export default class Task {
    constructor(name, description, dueDate, isImportant) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isImportant = isImportant;
        this.subTaskList = [];
        this.status = false;
        this.project = "";
        this.taskList = "";

    }

    toggleStatus() {
        this.status = !this.status
    }

    assgignToProject(projectId) {
        this.project = projectId
    }
    assgignToTaskList(taskListId) {
        this.taskList = taskListId
    }

    removeFromProject() {
        this.project = "";
    }
    removeFromTaskList() {
        this.taskList = "";
    }

}