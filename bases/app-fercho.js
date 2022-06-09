"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let LevelPower;
    (function (LevelPower) {
        LevelPower[LevelPower["fuerzaFlash"] = 5] = "fuerzaFlash";
        LevelPower[LevelPower["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        LevelPower[LevelPower["fuerzaBatman"] = 1] = "fuerzaBatman";
        LevelPower[LevelPower["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(LevelPower || (LevelPower = {}));
    ;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app-fercho.js.map