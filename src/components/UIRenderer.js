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

function handleCreateTask(taskId) {
    taskService.deleteTask(taskId);
    reRenderTasks();
    console.log(taskService.readTasks())
}




function reRenderTasks(tasksSection) {
    cleanTaskPanel(tasksSection)
    displayTasks(tasksSection)


}

function displayTasks(tasksSection) {
    taskService.readTasks().forEach(task => {
        const taskUI = TaskUI(task, handleCreateTask)
        tasksSection.appendChild(taskUI)
    })

}

function cleanTaskPanel(tasksSection) {
    tasksSection.innerHTML = ""
}


export default function UIRenderer() {



    return
}
export { reRenderTasks, displayTasks, cleanTaskPanel, displayProjects }