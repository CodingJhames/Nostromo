
( () => {

    let flash: { name: string, age?: number, powers:string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'time travel'],
        
    }

    let superman: { name: string, age?: number, powers:string[], getName?: () => string } = {
        name: 'Klark kent',
        age: 60,
        powers: ['super velocidad'],
        
    }

    console.log( flash );

    /* flash = {
        name:'Clark kent',
        // age: 60,
        powers: [ 'supa force'],
        getName(){
            return this.name;
        }
    }

    console.log( flash.getName() ); */

})()