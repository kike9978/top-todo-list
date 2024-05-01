import "./styles/style.css"

import Project from "./modules/Project"
import Task from "./modules/Task"
import SystemManager from "./modules/SystemManager"

const project = Project()
const task = Task()
const systemManager = SystemManager()

console.log(project.projects)

project.createProject("pompis")
console.log(project.projects)

task.createTask("segunda tarea", "es la segunda tarea de prueba", "hoy", false, [])
console.table(task.tasks)

console.log(systemManager.filterTasksByProjects())