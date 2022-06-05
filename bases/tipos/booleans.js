"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    // isSuperman = ( isBatman ) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
    console.log({ isBatman });
})();
