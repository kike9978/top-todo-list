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