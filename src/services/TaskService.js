import tasksData from "../data/tasksData.json"
import taskListsIds from "../data/taskListsIds"
import { data } from "autoprefixer";



export function getTasksByTaskListId(taskListId) {
    const tasks = getTasks()

    return tasks.filter(task => task.taskListId === taskListId)

}

export function getAllTasks() {
    return tasksData.tasks;
}

export function getTaskById(taskId) {
    return tasksData.tasks.find(task => task.id === taskId)
}



export function getFilteredTasks() {
    /* const tasks = getTasks(); */
    const tasks = getTasksByTaskListId(taskListsIds[0])
    const filteredTasks = []
    const pendingTasks = tasks.filter(task => !task.isCompleted)
    const completedTasks = tasks.filter(task => task.isCompleted)
    filteredTasks.push(...pendingTasks)
    filteredTasks.push(...completedTasks)
    return filteredTasks
}

export function createTask(newTask) {
    const tasks = getTasks();
    tasks.push(newTask)
    tasksData["tasks"] = JSON.stringify(tasks)
}

export function readTasks() {
    const taskString = tasksData["tasks"]
    return taskString ? JSON.parse(taskString) : []
}

export function updateTask(taskId, updatedTaskData) {

    const tasks = getTasks()
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {

        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTaskData };
        tasksData["tasks"] = JSON.stringify(tasks)
    } else {
        console.error(`Task with ID ${taskId} not found.`);
    }

}

export function deleteTask(taskId) {
    const tasks = getTasks();
    console.log("id: " + taskId)
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    tasksData["tasks"] = JSON.stringify(filteredTasks)
}

export function getTasks() {
    return readTasks()
}

export function readSingleTask(taskId) {
    return getTasks().find(task => task.id === taskId)
}
