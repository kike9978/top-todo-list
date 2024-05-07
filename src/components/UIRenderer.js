import TaskService from "../services/TaskService"
import ProjectService from "../services/ProjectService"
import TaskListService from "../services/TaskListService"
import TaskUI from "./ui/Task.ui"
import ProjectUI from "./ui/Project.ui"
import Button from "./ui/Button"
const taskService = new TaskService()
const projectService = new ProjectService()
const taskListService = new TaskListService()


function displayProjects(projectSection) {
    const fragment = document.createDocumentFragment()
    projectService.readProjects().forEach(project => {
        const projectUI = ProjectUI(project)
        fragment.appendChild(projectUI)
    })
    projectSection.appendChild(fragment)
}

function displayTaskLists(taskListSection) {
    const fragment = document.createDocumentFragment()
    taskListService.readTaskLists().forEach(taskList => {
        const p = document.createElement("p")
        p.innerText = taskList.name
        fragment.appendChild(p)
    })
    taskListSection.appendChild(fragment)
}

function handleDeleteTask(taskId) {

    taskService.deleteTask(taskId);
    reRenderTasks();
}

function handleCompleteTask(taskId) {
    const updatedStatus = !taskService.readSingleTask(taskId).isCompleted
    taskService.updateTask(taskId, { isCompleted: updatedStatus })
    reRenderTasks()
}

function handleUpdateTaskName(e, taskId) {
    e.preventDefault()

    const myformData = new FormData(e.target)
    const formDataOjb = Object.fromEntries(myformData.entries())
    taskService.updateTask(taskId, { name: formDataOjb.taskName })
    reRenderTasks()



}


function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {

    const tasksSection = document.querySelector("#tasks-section")
    const fragment = document.createDocumentFragment()
    taskService.getFilteredTasks().forEach(task => {
        const taskUI = TaskUI(task, () => handleDeleteTask(task.id), () => handleCompleteTask(task.id), (e) => handleUpdateTaskName(e, task.id))
        fragment.appendChild(taskUI)
    })
    tasksSection.appendChild(fragment)

}

function cleanTaskPanel() {
    const tasksSection = document.querySelector("#tasks-section")
    tasksSection.innerHTML = ""
}


export default function UIRenderer() {



    return
}
export { reRenderTasks, displayTasks, cleanTaskPanel, displayProjects, displayTaskLists }