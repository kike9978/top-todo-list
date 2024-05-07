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
    console.log(taskService.readTasks())
}

function handleCompleteTask(taskId) {
    taskService.updateTaskStatus(taskId)
    reRenderTasks()

    /* get task by id */
    /* get value of the check */
    /* switch isCompleted value */
    /* taskService.updateTask(taskId,) */
    /* update ui */
    console.log("hola")
}




function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {
    const tasksSection = document.querySelector("#tasks-section")
    taskService.getFilteredTasks().forEach(task => {
        const taskUI = TaskUI(task, () => handleDeleteTask(task.id), () => handleCompleteTask(task.id))
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