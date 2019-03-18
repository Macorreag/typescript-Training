function pruebaTestAngular(
    param1:string,
    param2:string = "Hola mundo",
    param3?:string){
    /*  Param1 obligatorio
        Param2 Tiene por defecto "Hola mundo"
        Param3 es  opcional
    */

    console.log(param1);
    console.log(param2);
    console.log(param3);
}
pruebaTestAngular("Miller");
pruebaTestAngular("Miller","correa","g");