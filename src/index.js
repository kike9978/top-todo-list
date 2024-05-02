
import Project from "./components/Project"
import Task from "./components/Task"
import TaskList from "./components/TaskList"
import ProjectService from "./services/ProjectService"
import TaskListService from "./services/TaskListService"
import TaskService from "./services/TaskService"


const taskData = [
    { name: "tarea1", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea2", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea3", description: "mi descripción", dueDate: "mañana", isImportant: true },
    { name: "tarea4", description: "mi descripción", dueDate: "mañana", isImportant: true },

]
const tareasDivertidas = []

const newProjects = ["patucasa", "sabrosuraIntensa", "esquicites"]
const projectService = new ProjectService()
const taskListService = new TaskListService()
const taskService = new TaskService()

window.projectService = projectService;
window.taskListService = taskListService;
window.taskService = taskService

newProjects.forEach(project => projectService.createProject(project))
console.log(projectService.readProjects())

taskData.forEach(task => tareasDivertidas.push(new Task(task.name, task.description, task.dueDate, task.isImportant)))

console.table(new Task(taskData[0].name, taskData[0].description, taskData[0].dueDate, taskData[0].isImportant))
console.table(tareasDivertidas)

const taskList = new TaskList("hola")
const project = new Project("Proyecto")

tareasDivertidas.forEach(task => project.addTask(task))

taskList.addTask({ name: "hola", taskId: 2, status: true })

console.log("pendientes: ", taskList.getPendingTasks())
console.log("completadas: ", taskList.getCompletedTasks())

