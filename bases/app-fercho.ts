(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[ string, number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum LevelPower {
     fuerzaFlash = 5,
     fuerzaSuperman = 100,
     fuerzaBatman = 1,
     fuerzaAcuaman = 0
    };
    
    
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  