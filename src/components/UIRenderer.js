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




function reRenderTasks() {
    cleanTaskPanel()
    displayTasks()


}

function displayTasks() {
    const tasksSection = document.querySelector("#tasks-section")
    taskService.readTasks().forEach(task => {
        const taskUI = TaskUI(task, handleDeleteTask)
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