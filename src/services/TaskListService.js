import tasksData from "../data/tasksData.json"

export default class TaskListService {

    getActiveTasklist() {
        const activeListElement = document.querySelector("[data-status=active")

        return activeListElement.getAttribute("data-id")
    }


    createTaskList(taskList) {
        const taskLists = this.getTaskLists();
        taskLists.push(taskList)
        tasksData["taskLists"] = JSON.stringify(taskLists)
    }

    readTaskLists() {
        const taskListString = tasksData["taskLists"]
        return taskListString ? JSON.parse(taskListString) : []
    }

    updateTaskList(taskListId, updateTaskList) {
        const taskLists = this.getTaskLists()
        const taskListIndex = taskLists.findIndex(taskList => taskList.id === taskListId);
        taskLists[taskListIndex] = updateTaskList;
        tasksData["taskLists"] = JSON.stringify(taskLists)
    }

    deleteTaskList(taskListId) {
        const taskLists = this.getTaskLists();
        const filteredTaskLists = taskLists.filter(taskList => taskList.id !== taskListId);
        tasksData["taskLists"] = JSON.stringify(filteredTaskLists)
    }

    getTaskLists() {
        return this.readTaskLists()
    }
}