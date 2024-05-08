import tasksData from "../data/tasksData.json"
import taskListsIds from "../data/taskListsIds"

export default class TaskService {

    getTasksByTaskListId(taskListId) {
        const tasks = this.getTasks()

        return tasks.filter(task => task.taskListId === taskListId)

    }

    getFilteredTasks() {
        /* const tasks = this.getTasks(); */
        const tasks = this.getTasksByTaskListId(taskListsIds[0])
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

    updateTask(taskId, update) {
        const tasks = this.getTasks()
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {

            tasks[taskIndex] = { ...tasks[taskIndex], ...update };
            tasksData["tasks"] = JSON.stringify(tasks)
        } else {
            console.error(`Task with ID ${taskId} not found.`);
        }

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

    readSingleTask(taskId) {
        return this.getTasks().find(task => task.id === taskId)
    }
}