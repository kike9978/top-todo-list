import tasksData from "../data/tasksData.json"

export default class ProjectService {

    createProject(project) {
        const projects = this.getProjects();
        projects.push(project)
        tasksData["projects"] = JSON.stringify(projects)
    }

    readProjects() {
        const projectString = tasksData["projects"]
        return projectString ? JSON.parse(projectString) : []
    }

    updateProject(projectId, updateProject) {
        const projects = this.getProjects()
        const projectIndex = projects.findIndex(project => project.id === projectId);
        projects[projectIndex] = updateProject;
        tasksData["projects"] = JSON.stringify(projects)
    }

    deleteProject(projectId) {
        const projects = this.getProjects();
        const filteredProjects = projects.filter(project => project.id !== projectId);
        tasksData["projects"] = JSON.stringify(filteredProjects)
    }

    getProjects() {
        return this.readProjects()
    }
}