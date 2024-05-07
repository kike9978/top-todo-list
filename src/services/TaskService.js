import tasksData from "../data/tasksData.json"

export default class TaskService {

    getFilteredTasks() {
        const tasks = this.getTasks();
        const filteredTasks = []
        const pendingTasks = tasks.filter(task => !task.isCompleted)
        const completedTasks = tasks.filter(task => task.isCompleted)
        filteredTasks.push(...pendingTasks)
        filteredTasks.push(...completedTasks)
        return filteredTasks
    }

    createTask(task) {
        const tasks = this.getTasks();
        tasks.push(task)
        tasksData["tasks"] = JSON.stringify(tasks)
    }

    readTasks() {
        const taskString = tasksData["tasks"]
        return taskString ? JSON.parse(taskString) : []
    }

    updateTask(taskId, updateTask) {
        const tasks = this.getTasks()
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        tasks[taskIndex] = updateTask;
        tasksData["tasks"] = JSON.stringify(tasks)
    }

    deleteTask(taskId) {
        const tasks = this.getTasks();
        console.log("id: " + taskId)
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        tasksData["tasks"] = JSON.stringify(filteredTasks)
    }

    getTasks() {
        return this.readTasks()
    }

    updateTaskStatus(taskId) {
        const tasks = this.getTasks()
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
        tasksData["tasks"] = JSON.stringify(tasks)
    }
}