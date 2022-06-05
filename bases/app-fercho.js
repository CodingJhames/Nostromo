"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let LevelPower;
    (function (LevelPower) {
        LevelPower[LevelPower["fuerzaFlash"] = 5] = "fuerzaFlash";
        LevelPower[LevelPower["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        LevelPower[LevelPower["fuerzaBatman"] = 1] = "fuerzaBatman";
        LevelPower[LevelPower["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(LevelPower || (LevelPower = {}));
    ;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
