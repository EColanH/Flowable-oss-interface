FLOWABLE TASK:
    3 opciones -> Tareas - Procesos - Casos

    Tareas:
        . Filtros: nombre de tarea, estado (abierta o completada), "process definition", asignación (involved, assignee, candidate)
        . Botón "Create task"
        . Ordenar: más recientes, antiguos, vence primero, vence último
        . Lista de todas las tareas según filtros
        . Header: 
            -   Nombre tarea
            -   Assignee
            -   Due date
            -   Part of case (Nombre del caso + creation date)
            -   Shows people involved, content items, comments, sub task
            -   "Save" and "Complete" buttons
    
    Procesos: 
        . Filtros: estado (running, completed o all) 
        . Botón "Start Process"
        . Ordenar(igual que task)
        . Header:
            -   Nombre del proceso + creation date
            -   Started by
            -   Started (date)
            -   Ended (date)
            -   Cancel process button
        . Body:
            -   Listado tareas activas
            -   Listado tareas completadas
                    * Logo con iniciales del assignee
                    * Nombre de la tarea
                    * Asignado a.../Compleado por...
                    * Creado.../Tomó...(tiempo)
            -   Comentarios:
                    * Logo con iniciales del usuario que añadio el comentario
                    * Added by... + (hace cuanto fue añadido)
                    * Comentario
    
    Casos: 
        . Filtros y ordenación igual a procesos
        . Botón "Start case"
        . Body:
            -   Available/Active stages
            -   Ended stages
                    * Estado
                    * Started...
            -   Active tasks
            -   Completed tasks
            -   Related content (Añadir documentos)

PUNTOS DESTACADOS:

    WORK:
    - [ ] Tiene enlaces para navegar por el root y el parent
    - [x] Historico de procesos (Subitems)
    - [ ] Permitar matar casos/procesos "Terminate"
    - [ ] Work Form
    - [ ] Filtrado por cerrados, abiertos, mios, todos ....
    - [ ] Header con fácil lectura y visivilidad
    - [ ] Pestaña para añadir documentación
    - [ ] Se puede expandir la tarea/proceso/caso a toda la ventana

    TASK:
    - [ ] Muestra las tareas activas y completadas del proceso y el caso
    - [ ] Comentarios fácilmente visibles
    - [ ] Tareas tienen un logo con las iniciales del assignee
    - [ ] Se accede al proceso desde la tarea
    - [ ] Stages activos/disponibles/finalizados para los casos

    EXTRA:
    - [ ] Se pueden mostrar los comentarios estilo chat (engage)?
