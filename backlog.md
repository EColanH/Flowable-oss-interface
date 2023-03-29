# Project backlog

- [ ] -  - Quitar el polling de peticiones a /api/user para saber si el usuario está loggeado o no. 
- [ ] -  -  Configurar el proyecto para desplegarlo en el tier free de Vercel o en infra de Mimacom (¿un namespace de K8s?). Incluir como desplegar en "free" un flowable server (eso es más complicado...). 
- [ ] -  - Formatear las fechas que se muestran en la UI (Formato ISO sin la T (2007-11-03 24:12:03))
- [ ] -  - Implementar traer la imagen de usuario de Gravatar
- [ ] -  - Refactor final de la aplicación
- [ ] -  - Restyling de la app (que se vea más bonita)

## Sprint 4

- [x] - Efrain - Arreglar la navegación (está rota porque no navegamos a las tareas que seleccionamos.)
- [x] - Efrain - De cara a que el usuario pueda editar formularios, mirar si eres asignee (no sólo mirar los candidates).
- [x] - Efrain - El admin siempre tiene que poder hacer todo con todo
- [x] - Efrain - Añadir Spinners (o lo que sea que quede bien) cuando se hacen llamadas al backend que bloquean la app.
- [x] - Efrain - Que el menú mantenga resaltada la sección en la que estamos
- [ ] -  - Aplicar Turbopack al proyecto
- [x] - Efrain - Revisar si se puede eliminar la declaración redundante de form por el readonly en JsonForms.tsx
- [ ] -  Deba - Añadir en los README instrucciones para ejecutar el backend sólo con docker -- ELIMINAR EL PROYECTO DE BACKEND en favor de docker y pasar la ui a la raíz --> UNIFICAR TODO EN UN único README en la raiz del proyecto, explicando las diferentes opciones para ejecutar el backend y como construir y ejecutar el frontend
- [ ] - Deba - Añadir un fichero rest client (.http) llamado deployModels.http que despliegue los modelos de resources con llamadas REST. Este fichero será necesario cuando se ejecute el backend con docker. Actualizar los README para que se tenga en cuenta.
- [ ] -  - Estabilizar el repo (o sea, probar a fondo toda la app) BONUS: ¿Automatizamos las pruebas E2E con alguna herramienta?

## Sprint 3

- [x] - Efrain - Cambiar el proxy de peticiones para que en lugar de usar un body con el método y la ruta, se use el propio método de la petición y la parte final de la ruta. El enrutador sólo debe de atender a los métodos que se usen (GET, POST, PUT y DELETE ¿Alguno más?)
- [x] - Efraín - Cambiar el componente Form.tsx para que se llame LoginForm.tsx
- [x] - Efrain - Eliminación de /pages en favor de /app (Requiere actualización de [iron-session para Next 13.2](https://github.com/vvo/iron-session/issues/570))
- [x] - Efrain - Eliminar server.js en favor de next start (ejecución de Node.js basada en [Node.js Server](https://nextjs.org/docs/deployment#nodejs-server) y en consecuencia
- [x] - Efrain - Evitar que se hagan las llamadas del dashboard (incluidas las llamadas para obtener las definiciones del diálogo "Create") antes de que dispongamos de la cookie de usuario.
- [x] - Efrain - Mostrar mensaje cuando se producen errores al hacer llamadas al backend, (aplicar estilos). Los mensajes de error genéricos se muestran de manera preeminente en la UI (buscad una opción que quede bien). Explorad el uso de error.tsx de Next.js. Si el error es porque el usuario no está loggeado, entonces se le tiene que redirigir a la pantalla de login.
- [x] - Ievgenii - Modificar el código de UI para que se pueda parametrizar las URLs de las APIS que se usen. (parámetros y rutas dinámicas)
- [x] - Ievgenii - meter iconos al task (process / case parent)
- [x] - Efrain - Convertir en SSR todo lo que no requiera componente cliente. (e.g.: El menú, incluída la carga de las definiciones de los procesos y los casos para
- [x] - Efrain - Upgrade a Next.js 13.2
- [x] - Deba - Cuando se crean procesos o casos, darles por defecto el nombre que tenga la definición + un timestamp de creación (e.g.: 2023-02-23T13:58)
- [x] - Ievgenii - En la cabecera de las tareas, nombre del caso o proceso desde el que proviene (y enlace al mismo). 
- [x] - Deba - Quitar todos los forms de backend/src/main/resources/forms. (Probar primero con uno para ver que el despliegue y la instanciación de los casos y los procesos se realiza sin problem
- en ausencia de form desplegado).
- [x] - Deba - Mover los modelos de ui/public/forms a backend/main/resources/static/forms. Cambiar el origen de los forms para el renderizado para que en lugar de ir a una ruta relativa de 
- la app Next.js vaya a localhost:8080/forms (usando autenticación)
- [x] - Efrain - Unificar la manera en la que hacemos las llamadas al backend (Axios para todo o quitar axios). Reducir las llamadas de parseo de JSON a lo mínimo imprescindible 
- (¿empleando un hook de axios? - o solución similar).
- [x] - Efrain - Simplificar la lógica de las vistas (Layout y/o page) para hacerlas más simples. Por ejemplo, sacar los fetch que se hacen a funciones que se 
- invoquen desde la vista. 
- Limitar la lógica a decisiones propias de la vista (un cambio de color, por ejemplo).
- [x] - Efrain - Eliminar código muerto, incluso páginas enteras, el hook de useWindowsDimensions (comprobar si se usa) y la carpeta utils
- (comprobar si se usa y si usa mover el código a lib).
- [x] - Ievgenii - Mover a componentes las partes de la UI como botones para simplificar las vistas.
- [x] - Ievgenii - Revisar los estilos para que estén más centralizados. Aprovechar para unificar criterios (fuente sans-serif, colores)
- [x] - Ievgenii - Crear un prettier y un eslint (y cualquier otra cuestión de estilo del proyecto)
- [x] - Ievgenii - Crear modelos para todos los objetos que tenemos (Hacer un uso efectivo de Typescript)

## Sprint 2

- [x] - Efraín - Claim/unclaim no debería estar habilitado para tareas completadas
- [x] - Roberto - Mejorar la maquetación de las botoneras con botones agrupados abajo a la derecha (lo más grave es que no sale el botón para mostrar el diagrama)
- [x] - Roberto - Incrementar el tamaño de la previsualización de diagramas
- [x] - Ievgenii - Eliminar los milestones del detalle de la actividad
- [x] - Efraín - Usuario admin tiene acceso de administrador (grupo: Flowable Administrator)
- [x] - Efraín - Revisar la función para activar o no el botón de completar en base a validaciones. 
- [x] - Efraín - Validar los formularios para comprobar que todos se pueden completar y que no muestra errores de renderer
- [x] - Roberto - Previsualización de procesos y casos en el detalle de la actividad. Se muestra con una acción del usuario para mostrar la previsualización en lugar del dashboard. ~~Usar las mismas librerías que se usaron en OSS. [Procesos](https://github.com/flowable/flowable-engine/tree/flowable-release-6.7.2/modules/flowable-ui/flowable-ui-task-frontend/src/main/resources/static/display) y [Casos](https://github.com/flowable/flowable-engine/tree/flowable-release-6.7.2/modules/flowable-ui/flowable-ui-task-frontend/src/main/resources/static/display-cmmn)~~. PASAMOS DIRECTAMENTE AL PLAN B: Usar [la REST API de los engines para obtener la [previsualización de procesos](https://documentation.flowable.com/latest/assets/core-swagger/bpmn.html#/Process%20Instances/getProcessInstanceDiagram) y [la de casos](https://documentation.flowable.com/latest/assets/core-swagger/cmmn.html#/Case%20Instances/getCaseInstanceDiagram). La previsualización sólo estará activa para casos o procesos activos. 
- [x] - Ievgenii - Implementar el layout del detalle del caso (basado en el layout del listado de actividades)
- [x] - Ievgenii - El botón de complete sólo se debe activar si tu usuario es el assignee de la tarea. 
- [x] - Roberto - Solucionar el "glitch" del login ocultando el layout (aparece el dashboard por una fracción de segundo)
- [x] - Efraín - Botón de Claim/unclaim en el detalle de la tarea. Activar el botón de claim sólo si eres un candidate user o perteneces a un candidate group. 
- [x] - Deba - Limpieza de los modelos que hay ahora mismo y creación de un par de casos de referencia y un par de procesos de referencia. Que se incluyan formularios (jsonforms) con variedad de componentes. Al menos un ejemplo que contenga uso de candidate groups.
- [x] - Deba - Implementar el diálogo de crear (Componente). --> Falta la creación de casos (igual que está hecho para procesos)
- [x] - Ievgenii - Botón para terminar actividades. Todo lo relacionado con actividad se elimina en cascada
- [x] - Deba - Que los radiobuttons de los jsonforms se rendericen (ahora sale un dropdown)
- [x] - Ievgenii - En el detalle de una tarea, cuando completas la tarea, que en el listado de tareas, al lado del nombre aparezca un "check" indicando que la tarea se ha completado también.
- [x] - Efraín - Reemplaza el commandlinerunner para crear usuarios con un fichero bootstrap.http (comprobar que funciona en IntelliJ, VSCode. ). Añadir además del usuario administrador, 3 usuarios normales. Añadir dos grupos y asignar los usuarios a los grupos (dos a uno y el que queda al otro). Actualizar el readme para que se tenga en cuenta. 



## Sprint 1

- [x] - Efra/Ievgenii - Esqueleto Next.js
Generar el esqueleto de proyecto y subirlo al repositorio a una carpeta ui. El esqueleto de proyecto generado con el script de Next.js 13 configurado con Turbopack. Incluir también Bulma. Incluir README.md con una sección de "Build" y otra de "Run".
- [x] - Ievgenii  Esqueleto Backend Flowable - 
Generar una aplicación Flowable REST básica y subirla al repositorio a una carpeta backend. Debemos incluir todos los engines OSS usando el starter por defecto de flowable (flowable-spring-boot-starter-rest). Usar [el blog post de Philip](https://www.flowable.com/blog/the-road-to-spring-boot-2-0). BDD con H2 pero [configurando en el proyecto h2-console](https://www.baeldung.com/spring-boot-h2-database#h2-console). Implementar las propiedades de configuración de acceso a la REST API del servidor Flowable de turno en la aplicación Next.js 
- [x] - Efra - Diseñar el sistema de autenticación en Next.js usando Flowable IDM.
Implementar una página de prueba de conexión. 
- [x] - Efra -  Implementar el sistema de autenticación en Next.js usando Flowable IDM. - 
Incluye la creación del formulario de login, la función de logout. Logout automático pasado un tiempo.
- [x] - Ievgenii - Implementar el root layout de la app.
El root layout debe incluir la barra de navegación, logo y menú de usuario y el placeholder para ubicar las páginas de la app.
- [x] - Ievgenii - Crear componentes (Kanban, Card View, Lista)
- [x] - Efra - Implementar el layout del listado de actividades - Incluye la petición para obtener el listado de actividades y el placeholder para mostrar el detalle de la actividad.
- [x] Implementar la página de bienvenida v0 (página por defecto de la app, basada en el root layout) - 
Incluye texto de bienvenida, estructura en 3 listas verticales de tareas: Actividades pendientes, actividades próximas a vencer y actividades completadas. En la información de las tareas que se muestren habría que indicar de qué caso o proceso provienen. Las tareas ad-hoc también deberían ir indicadas.
Sólo mostrar el listado de casos y procesos disponibles junto con un botón para crear una tarea ad-hoc. Tras hacer click en el botón de crear, navegar al elemento creado. (No importa que la navegación, hasta que se creen las páginas de detalle de cada tipo muestre un 404).
- [x] Implementar el layout del listado de actividades (basado en el root layout)
La vista por defecto es una página con un mensaje indicando que se debe seleccionar la actividad.
- [x] Implementar el layout del listado de la tareas (basado en el root layout)
- [x] Implementar el layout del detalle del proceso (basado en el layout del listado de actividades)
- [x] Implementar el layout del detalle de la tarea (basado en el layout de listado de tareas)
Sólo incluye (de momento), texto para identificar la tarea seleccionada (nombre de la tarea, assignee, fecha de creación)


