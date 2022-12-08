
var first = document.querySelector('.pedra') ;
var second = document.querySelector('.papel');
var third = document.querySelector('.tesoura');
    
function carrosel(){
     // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
    // Create new link Element
        var link = document.createElement('link');
    // set the attributes for link element
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './estilo/carrosel.css';
        link.classList=("carrosel");
    // Append link element to HTML head
         head.appendChild(link);

 
}
//eventlistener para iniciar o carrosel
    var btn = document.getElementById("inicia");
    btn.addEventListener("click", carrosel);

//funcao para pegar os dados do inimigo
    function inimigo(){
            var InimigoMove;
        //set para jogada randomica do inimigo   
            let random=Math.floor(Math.random(100)*10);
            if (random===0){
                Math.ceil(random);
            }
            switch(random){
                case 1: case 2: case 3:   
                    InimigoMove="pedra"; 
                    break;
                case 4: case 5: case 6:
                    InimigoMove="papel"
                    break;
                case 7: case 8: case 9: case  10:
                    InimigoMove= "tesoura";
                    break;
            }

    return InimigoMove;
    }

//funcao para comparar os dados do inimigo e do player
    function play(DivID){
        //variaveis jogador e nimigo
            var JogadorMove = DivID;
            var InimigoMove= inimigo(); 
            var result;
            var estilos = estilosos(DivID,result);

         //bloco de comparacao para pedra
            if(JogadorMove=="pedra" && InimigoMove =="papel"){
                result = "derrota";
                estilos=estilosos(DivID,result);
          
            }
            else if(JogadorMove=="pedra" && InimigoMove =="tesoura"){
                result = "vitoria";
                document.getElementsByClassName("jogadorponto");
                estilos=estilosos(DivID,result);
           
            }
            else if(JogadorMove===InimigoMove){
                result = "empate";
                estilos=estilosos(DivID,result);
               
            }

        //bloco comparacao para papel    
            else if(JogadorMove=="papel" && InimigoMove =="pedra"){
                result = "vitoria";
                document.getElementsByClassName("jogadorponto");
                estilos=estilosos(DivID,result);
               
            }
            else if(JogadorMove=="papel" && InimigoMove =="tesoura"){
                result = "derrota";
                estilos=estilosos(DivID,result);
             
            }

        //bloco comparacao para tesoura    
            else if(JogadorMove=="tesoura" && InimigoMove =="pedra"){
                result = "derrota";
                estilos=estilosos(DivID,result);
           
            }
            else if(JogadorMove=="tesoura" && InimigoMove =="papel"){
                result = "vitoria";
                document.getElementsByClassName("jogadorponto");
                estilos=estilosos(DivID,result);
        
            }
        }
 //nao consegui fazer retornar o resultado e o jogador move
 //entao ate eu melhora eu vo fazer outra funcao aqui dentro mesmo


 
   function estilosos(jogador,resultado){
    //So o necessario uWu
    let resultados = resultado;
    let player=jogador;
    var BattleAnimation;

    //criar os estilos do "combate"
       var head = document.getElementsByTagName('HEAD')[0];
           var Battle = document.createElement('link');
           Battle.rel = 'stylesheet';
           Battle.type = 'text/css';
            head.appendChild(Battle);
    //serie de condicoes para colocar as animacoes
            if(player=="pedra" && resultados=="derrota"){

                //adicionando o caminho para o stylesheet
                Battle.href = './estilo/resultados/pedraderrota.css';
               
                //parar o  carrosel 
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=(""); 

               //fazer o carrosel voltar depois da animacao da jogada
                setTimeout(() => {
                     //apagando o link para o estilo da jogada
                    Battle.href=  '';
                    //voltando o link para o carrosel
                    change.ClassList=("carrosel")
                }, 10000);
            }

            else if(player=="pedra" && resultados == "vitoria"){
                Battle.href = './estilo/resultados/pedravitoria.css';
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=("");
                setTimeout(() => {
                   
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);
            }
            
            else if(player=="pedra" && resultados == "empate"){
                Battle.href = './estilo/resultados/empate.css';
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=("");
                setTimeout(() => {
                   
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);
            }

            else if(player=="papel" && resultados == "vitoria"){
                Battle.href = './estilo/resultados/PapelVitoria.css';
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=("");
                setTimeout(() => {
                   
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);
            }

            else if(player=="papel" && resultados == "derrota"){
                Battle.href = './estilo/resultados/PapelDerrota.css';
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=("");
                setTimeout(() => {
                    
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);
            }

            else if(player=="papel" && resultados == "empate"){
                Battle.href = './estilo/resultados/empate.css';
                var change=document.getElementsByClassName(".carrosel");
                change.ClassList=("");
                setTimeout(() => {
                   
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);}
                 
             else if(player=="tesoura" && resultados == "vitoria"){
                Battle.href = './estilo/resultados/tesouraderrota.css';
                 var change=document.getElementsByClassName(".carrosel");
                 change.ClassList=("");
                 setTimeout(() => {
                    
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);}
                 
             else if(player=="tesoura" && resultados == "derrota"){
                Battle.href = './estilo/resultados/tesouravitoria.css';
                 var change=document.getElementsByClassName(".carrosel");
                 change.ClassList=("");
                 setTimeout(() => {
                    
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);}
           
             else if(player=="tesoura" && resultados == "empate"){
                Battle.href = './estilo/resultados/empate.css';
                 var change=document.getElementsByClassName(".carrosel");
                 change.ClassList=("");
                 setTimeout(() => {
                   
                    Battle.href=  '';
                    change.ClassList=("carrosel")
                }, 10000);}
               
   }

            