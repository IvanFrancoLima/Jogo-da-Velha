
//Varíaveis globais
let vez = window.document.querySelector('#introdução') //Frase de instrução e fim do jogo
let jogador = 1 // Varíavel que guarda a vez dos jogadores
let jogadas = [3,3,3,3,3,3,3,3,3] //Vetor que guarda as jogadas
let vencedor = 1 // Varíavel que determina que o jogo acabou
let cont = 0 //Variável contadora para determinar empate

function verificar(num,plays){
    //Ganhos na Horizontal
    if(plays[0] == plays[1] && plays[0] == plays[2] && plays[0]!=3){
        vez.innerHTML=`Jogador ${plays[1]} venceu`
        vencedor = 2
    }else if(plays[3] == plays[4] && plays[3] == plays[5] && plays[3]!=3){
        vez.innerHTML=`Jogador ${plays[3]} venceu`
        vencedor = 2
    }else if(plays[6] == plays[7] && plays[6] == plays[8] && plays[6]!=3){
        vez.innerHTML=`Jogador ${plays[6]} venceu`
        vencedor = 2
    }
    /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

    //Ganhos na Vertical
    if(plays[0] == plays[3] && plays[0] == plays[6] && plays[0]!=3){
        vez.innerHTML=`Jogador ${plays[0]} venceu`
        vencedor = 2
    }else if(plays[1] == plays[4] && plays[1] == plays[7] && plays[1]!=3){
        vez.innerHTML=`Jogador ${plays[1]} venceu`
        vencedor = 2
    }else if(plays[2] == plays[5] && plays[2] == plays[8] && plays[2]!=3){
        vez.innerHTML=`Jogador ${plays[2]} venceu`
        vencedor = 2
    }
    /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

    //Ganhos na Diagonal
    if(plays[0] == plays[4] && plays[0] == plays[8] && plays[0]!=3){
        vez.innerHTML=`Jogador ${plays[0]} venceu`
        vencedor = 2
    }else if(plays[2] == plays[4] && plays[2] == plays[6] && plays[2]!=3){
        vez.innerHTML=`Jogador ${plays[1]} venceu`
        vencedor = 2
    }else if(num == 9){
        vez.innerHTML=`JOGO EMPATADO`
        vencedor = 2
    }
    /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// ///

    if(vencedor == 2 || num == 9){
        let tabuleiro = window.document.getElementById('container')
        tabuleiro.style.display='none'

        let jogar_denovo = window.document.getElementById('reset')
        jogar_denovo.style.display='block'
    }
}

function q0(){
    if(jogadas[0]!=1 && jogadas[0]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p1') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[0] = 1 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p1') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[0] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
        
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q1(){
    if(jogadas[1]!=1 && jogadas[1]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p2') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[1] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p2') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[1] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}


function q2(){  
    if(jogadas[2]!=1 && jogadas[2]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p3') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[2] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p3') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[2] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q3(){
    if(jogadas[3]!=1 && jogadas[3]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p4') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[3] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p4') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[3] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q4(){
    if(jogadas[4]!=1 && jogadas[4]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p5') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[4] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p5') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[4] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q5(){
    
    if(jogadas[5]!=1 && jogadas[5]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p6') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[5] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p6') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[5] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q6(){
    if(jogadas[6]!=1 && jogadas[6]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p7') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[6] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p7') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[6] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

function q7(){
    if(jogadas[7]!=1 && jogadas[7]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p8') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[7] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário
        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p8') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[7] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}


function q8(){
    if(jogadas[8]!=1 && jogadas[8]!=2 && vencedor!=2){ //Verificando se o bloco 1 já foi escolhido
        if(jogador == 1){
            vez.innerHTML='Vez do jogador 2' //Informando a vez do jogador 2

            let jogada = window.document.querySelector('#p9') //Variável que vai atribuir o valor X ao bloco
            jogada.innerHTML="X" 
        
            jogadas[8] = 1//Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 2 //Mudando a vez para o próximo usuário

        }else{
            vez.innerHTML='Vez do jogador 1' //Informando a vez do jogador 1

            let jogada = window.document.querySelector('#p9') //Variável que vai atribuir o valor O ao bloco
            jogada.innerHTML="O"
    
            jogadas[8] = 2 //Registrando a jogada do usuário
            

            cont++
            verificar(cont,jogadas)

            jogador = 1 //Mudando a vez para o próximo usuário
        }
    }else{
        window.alert('Este bloco já foi selecionado') //Aviso para o usuário que a posição já foi escolhida
    }
}

