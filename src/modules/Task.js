

const tasks = [{
    name: "Primera tarea",
    description: "Esta es una primera tarea la cual la estoy usando como prueba",
    dueDate: "hoy",
    isImportant: true,
    subTasks: [],
    project: "default"
}]

function createTask(name, description, dueDate, isImportant, subTasks, project = "default") {
    tasks.push({ name, description, dueDate, isImportant, subTasks, project })
}
export default function Task() {

    return { tasks, createTask }
}