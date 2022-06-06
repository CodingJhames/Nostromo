
( ()=>{

 const hero: string = 'Flash';

 function returnName():string {
     
    return hero;
 }

 const activateSignal = ():string => {

    return 'Activated signal';
 }

 console.log( typeof activateSignal );
 
 const heroName = returnName();



} )()