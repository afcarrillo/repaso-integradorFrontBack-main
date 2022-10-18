#  Repaso Integrador Senior Checkpoint

Para levantar el proyecto seguir los siguientes pasos:

- "npm install".
- "npm start" para levantar react-webpack.
- "npm run server" para levantar la api (server).

**IMPORTANTE :** ambos scripts deben estar ejecutados para que la conexion se haga correctamente.

- _Acceder a **localhost:3000** para ver el proyecto de react_.

- _Acceder a **localhost:1337** para ver la APi levantada_.

# CONSIGNAS:
La realidad es que este proyecto es un esqueleto de una app con React y Back conectado para poder hacer un todolist, es decir, una lista de tareas donde puedas agregar, editar el estado de una tarea y borrar una tarea.

# POR DONDE EMPIEZO
te recomendamos empezar por ver el backend, ¿Por qué? porque nuestro backend es nuestro server, donde vamos a almacenar los datos y desde donde vamos a manipularlos! ya sea borrar, editar o lo que querramos. Para esto tenemos que tener en cuenta, la creacion de nuestra base de datos, la conexion de nuestra db a sequelize, que modelos podriamos crear y que campos vamos a necesitar! 
recuerda ademas, configurar tu archivo base te tu back (en este caso main) para que se sinconice tu base de datos, lea tus modelos, y leea la informacion que le va a llegar a travez de las rutas

- con todo esto ya configurado piensa como podrias hacer rutas para obtener las tareas, crearlas, borrarlas y editarlas


# VAMOS A VERLO!
es hora de que desde nuestro front podamos usar estas funcionalidades, empecemos por la de añadir una nueva tarea y que esta impacte en nuesta base de datos! crea un nuevo componente para esto y recuerda de que forma nosotros podemos capturar la informacion que ingresamos y como nos comunicamos con nuestro backend!

- una vez que logres este impacto, vamos a pasar a mostrar desde nuestro front las tareas que fuimos añadiendo 

-¿Como podemos seleccionar un elemento para decir que este es que queres editar? opcional: hay dos formas de completar el edit, y podes utilizar cualquiera de las dos o elegir una. la primera logica seria pensar como haces para editar el contenido de una tarea, la segunda logica seria pensar como podes editar el estado de una tarea a completado para tachar esa tarea o llevarla a otro lado.

-por ultimo, pensa la logica de como podes hacer para eleminar una tarea


# MAS DE TO DO LIST 
este repo es para que prectiques y te saques todas las dudas, con lo cual proba añadiendole a esta to do list todos los features que te sirvan de repaso tanto de front como de back! piensa en que cosas podes añadir u optimizar de tu código :)




