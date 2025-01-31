// Gestor de tareas. Crear una clase Tarea que contenga propiedades como
// id, titulo, descripcion, fechaLimite, y completada.
// Crear una clase ServicioTareas que administre un conjunto de tareas, con métodos para 
// agregar, completar y eliminar tareas. Implementar los siguientes métodos en la clase ServicioTareas:
// • agregarTarea(titulo, descripcion, fechaLimite): Para añadir una nueva tarea.
// • completarTarea(id): Para marcar una tarea como completada. 
// • quitarTarea(id): Para eliminar una tarea.
// • obtenerTareasPendientes(): Para obtener un listado de tareas pendientes.
// • obtenerTareasCompletadas(): Para obtener un listado de tareas completadas.
//  En un archivo tareas.js crea el objeto ServicioTareas y múltiples objetos Tarea con diferentes datos cada uno. 
//  Prueba los diferentes métodos de ServicioTareas. 

class Tarea{
    constructor(id,titulo,descripcion,fechaLimite){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaLimite = fechaLimite;
        this.completada = false ;
    }
}

class ServicioTareas extends Tarea{

     listaTareas = [];

    constructor(id,titulo,descripcion,fechaLimite){
        super(id,titulo,descripcion,fechaLimite);
        
        
    }

    agregarTarea(titulo, descripcion, fechaLimite){
        nuevaTarea = new Tarea(titulo,descripcion,fechaLimite);
        this.listaTareas.push(nuevaTarea);
    }
    
    completarTarea(id){}

    quitarTarea(id){}

    obtenerTareasPendientes(){}

    obtenerTareaCompletadas(){}
}