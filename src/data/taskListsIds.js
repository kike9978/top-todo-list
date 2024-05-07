import generateUniqueId from "../utils/generateUniqueId"
import TaskListService from "../services/TaskListService"
import listsMockData from "../data/listsMockData.json"
import taskMockData from "../data/taskMockData.json"
import projectMockData from "../data/projectMockData.json"

const taskListsIds = []
const taskListService = new TaskListService()

for (let i = 0; i < 4; i++) {
    taskListsIds.push(generateUniqueId())
}


let index = 0
projectMockData[0].taskList = []

listsMockData.forEach(mockList => {

    mockList["id"] = taskListsIds[index]
    projectMockData[0].taskList.push(mockList.id)
    index++;
})

taskMockData.forEach(mockTask => {
    mockTask["taskListId"] = taskListsIds[0]
})

projectMockData


export function consoleTest() {


    listsMockData.forEach(mockList => console.log(mockList))
    console.log("hola", projectMockData[0])
    projectMockData.forEach(mockProject => console.log(mockProject))
    taskListService.readTaskLists().forEach(taskList => console.log(taskList.id))


}


export default taskListsIds