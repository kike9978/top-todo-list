import generateUniqueId from "../utils/generateUniqueId"
import TaskListService from "../services/TaskListService"
import listsMockData from "../data/listsMockData.json"

const taskListsIds = []
const taskListService = new TaskListService()

for (let i = 0; i < 4; i++) {
    taskListsIds.push(generateUniqueId())
}


let index = 0

listsMockData.forEach(mockList => {

    mockList["id"] = JSON.stringify(taskListsIds[index])
    index++;
})



export function consoleTest() {
    console.log("hola")

    listsMockData.forEach(mockList => console.log(mockList))
    taskListService.readTaskLists().forEach(taskList => console.log(taskList.id))

}


export default taskListsIds