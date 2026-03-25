var miCarro = new Object();
miCarro.marca = "ford";
miCarro.modelo = "ikon fiesta";
miCarro.anio = 2013;

console.log(miCarro);

var miCarro={
    marca : "ford",
    modelo : "ikon fiesta",
    anio : 2013
}

console.log(miCarro);

const alumno ={
    id : "MAGZ050209MMCRRXA4",
    nombre : "Zoé",
    apellido1 : "Martínez",
    apellido2 : "García",
    num_contacto : [5530765231, 5535162384],
    direccion:{
        calle : "Av. Desembocadura",
        numero :{
            exterior : 23,
            interior : 2
        },
        colonia : "Acueducto de Guadalupe",
        alcaldia : "Gustavo A. Madero",
        cp : 7279,
        ciudad : "CDMX",
        pais : "México"
    },
    educacion:{
        kinder :{
            nombre : "Institución Educativa Federico Fröebel",
            privada : true,
            dormir : true,
            pipi : function(){
                console.log("Maeta me mie");
            }
        },
        primaria :{
            nombre : "Institución Educativa Federico Fröebel",
            privada : true,
            tiempo_recreo : "30 minutos",
            jugar : function(tipoJuego){
                console.log("jugando " + tipoJuego);
            }
        },
        secundaria :{
            nombre : "Institución Educativa Federico Fröebel",
            privada : true,
            pubertos : true,
            rebeldes : function(accion){
                console.log("Me sonaron por hacer " + accion);
            }
        }
    },
    actividadesPersonales : {
        fisica : "Karate",
        obligatoria : "Comer",
        actividadCotidiana (actividad){
            return ` ${nombre} hace la activdad de: ${this.fisica}`
        }
    }
};

console.log(alumno);
console.log(alumno.kinder.pipi());
console.log(alumno.primari.jugar("escondidas"));
console.log(alumno.secundaria.rebeldes("pelear con un profe"));

console.log(alumno.hasOwnProperty("nombre"));
console.log(alumno.hasOwnProperty("num_cuenta"));


alumno.num_cuenta = 321079079; //creara
console.log(alumno);
console.log(alumno['nombre']); //leer
console.log(alumno['num_cuenta']);
console.log(alumno['num_contacto']);
alumno.nombre = "Ingrid"; //actualizar
console.log(alumno['nombre']);
delete alumno.apellido1; //eliminar
console.log(alumno);