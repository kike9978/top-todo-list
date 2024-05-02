import TaskService from "../services/TaskService"
import TaskUI from "./ui/Task.ui"

function handleDeleteTask() {
    const taskService = new TaskService()
    taskService.deleteTask(1)
    console.log(taskService.readTasks())
    reRenderTasks()
}


function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {
    const tasksSection = document.querySelector("section")
    const taskService = new TaskService()
    taskService.readTasks().forEach(task => {
        const taskUI = TaskUI(task)
        tasksSection.appendChild(taskUI)
    })

}

function cleanTaskPanel() {
    const tasksSection = document.querySelector("section")
    tasksSection.innerHTML = ""
}


export default function UIRenderer() {



    return
}
export { handleDeleteTask, reRenderTasks, displayTasks, cleanTaskPanel }