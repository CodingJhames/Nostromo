( () => {

    const addNumbers = ( a: number, b: number ) =>  a + b;

    const greet = ( name: string ) => ` Hola ${name}`;

    const saveTheWorld = () => `World's saved!`;

    let myFunction: (y:number, z:number) => number;

    // let myFunction: (y:string) => string;
    let myFunction: () => string;

    myFunction = 10;
    console.log( myFunction );

    myFunction = addNumbers;
    console.log(myFunction( 1, 2) );

    myFunction = greet;
    console.log( myFunction( 'Chepito' ) );


    myFunction = saveTheWorld;
    console.log( myFunction() );














} )()