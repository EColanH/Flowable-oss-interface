# Scope MVP


## MVP

- Basic Auth (form login) - IDM engine based. 
- Obtener el listado de tareas pendientes (ordenadas por due date y prioridad)
- Acceder al detalle de una tarea para consultarla y/o completarla
- Mostramos los procesos/casos de más alto nivel y las tareas que le pertenecen directamente.
- Navegación a los sub casos/ sub procesos a traves de enlaces.
- Mostramos activos e inactivos para procesos y casos. Inactivos ordenados por fecha de terminación. Activos ordenados por due date y prioridad. Filtrado por todos, activos e inactivo.
- Por defecto serán los activos.
- ¿Qué pasa cuando una tarea se termina? Se va al parent y verifica que no tenga tareas activas. En el caso que no tenga, termina el parent y sigue el mismo paso hasta que el "callbackId" sea nulo (que no existe otro parent)
> Mostramos(previsualizamos) información básica del estado del caso y/o proceso.
- Agregar indicador de numero de tareas activas en los parent de más alto nivel
- Pantalla inicial despúes de logearse será el tab de actividades pendientes
- Añadir "Terminate" para matar los procesos/casos
- En las actividades principales(casos/procesos) se muestran las actividades pendientes/por vencer/completadas (tareas, casos, procesos).
- En la actividad ver el total de las tareas activas y completadas
- Las actividades en la que haya tareas pendientes asignadas a mi van arriba de la lista y a las que no estoy asignado se muestren debajo.
- Un botón "new" en el tab actividades, donde se muestren los procesos/casos desplegados para crear.
- Mostrar las tareas ad-hoc al lado de "Terminate".    
- Soportamos el claim/unclaim de tareas


TECNOLOGIAS:

- Material UI (https://mui.com/) community version
- Tailwindcss (https://tailwindcss.com/) versión gratuita
- Bulma (https://bulma.io/) gratuita
> Tiene muy buena pinta Bulma. Parece que tiene mucho más para empezar que Tailwind. 


## NO MVP

- Tab de tareas asignadas
- Un tab "historial" igual al tab de actividades, que muestre actividades terminadas (Se puede hacer como un log por usuario).
> ¿De donde sale el concepto de participante? Ojo que no tenemos tanta riqueza de identity links como en Enterprise.
- Ordenar la actividad por fecha de inicio y participación. 
- Añadir un tab de "Mis tareas". Solo se mostraran tareas, se puede filtrar por activas y completadas. Por defecto tareas activas