


export default class Task {
    constructor(name, description, dueDate, isImportant, id, isCompleted = false, taskListId) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isImportant = isImportant;
        this.subTaskList = [];
        this.isCompleted = isCompleted;
        this.project = "";
        this.taskListId = taskListId;
        this.id = id

    }

    toggleStatus() {
        this.isCompleted = !this.isCompleted
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