function pruebaTestAngular(param1, param2, param3) {
    /*  Param1 obligatorio
        Param2 Tiene por defecto "Hola mundo"
        Param3 es  opcional
    */
    if (param2 === void 0) { param2 = "Hola mundo"; }
    console.log(param1);
    console.log(param2);
    console.log(param3);
}
pruebaTestAngular("Miller");
pruebaTestAngular("Miller", "correa", "g");
