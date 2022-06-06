"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateSignal = () => {
        return 'Activated signal';
    };
    console.log(typeof activateSignal);
    const heroName = returnName();
})();
