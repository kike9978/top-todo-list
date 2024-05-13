


export default class Task {
    constructor(name, description, dueDate, isImportant, id, isCompleted = false, taskListId) {
        this.id = id
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.isImportant = isImportant;
        this.subTaskList = [];
        this.isCompleted = isCompleted;
        this.project = "";
        this.taskListId = taskListId;

    }

    // Getter methods

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getIsCompleted() {
        return this.isCompleted
    }

    // Setter methods

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    markAsCompleted() {
        this.completed = true
    }

    markAsIncomplete() {

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

    toPlainObject() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            isImportant: this.isImportant,
            taskListId: this.taskListId
        }
    }

    static fromPlainObject(obj) {
        return new Task(obj.name, obj.description, obj.dueDate, obj.isImportant, obj.id, obj.isCompleted, obj.taskListId)
    }

}