import TaskService from "../services/TaskService"
import ProjectService from "../services/ProjectService"
import TaskUI from "./ui/Task.ui"
import ProjectUI from "./ui/Project.ui"
import Button from "./ui/Button"
const taskService = new TaskService()
const projectService = new ProjectService()


function displayProjects(projectSection) {
    projectService.readProjects().forEach(project => {
        const projectUI = ProjectUI(project)
        projectSection.appendChild(projectUI)
    })

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
    taskService.getFilteredTasks().forEach(task => {
        const taskUI = TaskUI(task, () => handleDeleteTask(task.id), () => handleCompleteTask(task.id), (e) => handleUpdateTaskName(e, task.id))
        tasksSection.appendChild(taskUI)
    })

}

function cleanTaskPanel() {
    const tasksSection = document.querySelector("#tasks-section")
    tasksSection.innerHTML = ""
}


export default function UIRenderer() {



    return
}
export { reRenderTasks, displayTasks, cleanTaskPanel, displayProjects }