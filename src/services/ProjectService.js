import tasksData from "../data/tasksData.json"

export function createProject(project) {
    const projects = getProjects();
    projects.push(project)
    tasksData["projects"] = JSON.stringify(projects)
}

export function readProjects() {
    const projectString = tasksData["projects"]
    return projectString ? JSON.parse(projectString) : []
}

export function updateProject(projectId, updateProject) {
    const projects = getProjects()
    const projectIndex = projects.findIndex(project => project.id === projectId);
    projects[projectIndex] = updateProject;
    tasksData["projects"] = JSON.stringify(projects)
}

export function deleteProject(projectId) {
    const projects = getProjects();
    const filteredProjects = projects.filter(project => project.id !== projectId);
    tasksData["projects"] = JSON.stringify(filteredProjects)
}

export function getProjects() {
    return readProjects()
}