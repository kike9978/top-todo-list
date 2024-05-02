import TaskService from "../services/TaskService"
import TaskUI from "./ui/Task.ui"
import Button from "./ui/Button"
const taskService = new TaskService()




function onDelete(taskId) {
    taskService.deleteTask(taskId);
    reRenderTasks();
    console.log(taskService.readTasks())
}




function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {
    const tasksSection = document.querySelector("section")
    taskService.readTasks().forEach(task => {
        const taskUI = TaskUI(task, onDelete)
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
export { reRenderTasks, displayTasks, cleanTaskPanel }