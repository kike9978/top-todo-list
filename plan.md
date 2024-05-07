- [ ] Componentizar una tarea
- [ ] Crear grupos
- [ ] Crear listas
- [ ] Que las tareas se vayan a una lista por default
- [ ] Guardar las tareas y los grupos en el local storage al crear o editar
- [ ] Recuperar la info del local storage al abrir la página
- [ ] Darle a importantes a un tarea
- [ ] Que le puedas poner una fecha de cumplimiento a una tarea
- [ ] Darle check a una tarea finalizada
- [ ] Quitarle check a una tarea finalizada
- [ ] Asignar o cambiarle a el grupo a una tarea
    - [ ] Asignar tarea a grupo escribiendo "#"
- [ ] Poder agregar notas a una tarea
- [ ] Notificar cuántas tareas hay por cada lista y proyecto
- [ ] Escoger color para cada lista
- [ ] Crear estado de vació con ux writing
    - [ ] What do you need to 
- [ ] Modal de confirmación de tarea a medio editar 
    - [ ] Cargar la información de la tarea, lista o proyecto que queramos editar
- [ ] Agregar pasos por tareas
- [ ] Funcionalidad de regresar tarea?
- [ ] Formatear links
- [ ] Cerrar ciertas "modales" con escape o click a fuera
- [ ] Automácamente habilitar el campo de texto donde voy a escribir la tarea al darle al botón de crear una tarea
- [ ] Darle color a los proyectos
- [ ] Darle el id a cada elemento en el dom para poder eleminarlo evitando renderear todas las tareas


What I need?

- an storage manager
- a project list manager
- a list list manager
- a task list manager
- a system manager
- a ui renderer
- I need factory, modules just to create the items

subtask module
    titulo
    tareaPadre

    crud


task module
    titulo
    due date
    prioridad
    subtareas
    importante
    descripción
    project?

    eliminar tarea
    crear tarea
    editar tarea
    ver tarea

list module
    titulo
    tasks[]

    crud

project module
    titulo
    lists[]
    tasks[]

    crud

UIRenderer module
    crud tasks panel
        cards de tasks
    crud task card
        input
        botónes
        selects
    crud task collection panel
        details
    modales de edición/ creación
    panel de edición/creación
        
    


