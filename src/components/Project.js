const projects = [
    {
        name: "default",

    }
]


export default function Projects() {


    function createProject(name) {
        projects.push({ name })
    }
    return { projects, createProject }
}

class Project {
    constructor(name) {
        this.name = name
        this.taskList = []

    }

    addTask(task) {
        this.taskList.push(task)
    }
    removeTask(taskId) {
        this.taskList = this.taskList.filter(task => task.id !== taskId)
    }
}
