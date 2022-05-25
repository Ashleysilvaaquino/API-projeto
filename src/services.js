export function somar(n1, n2){
    let x = n1 + n2;
    return x;
}

export function dobro(n){
    return n * 2;
}

export function temperatura(temp){
    let a = true;
    if(temp > 37){
        a= true;
    } 
    else{
        a=false;
    }
    
    return a ;

}

export function media(n1,n2,n3){
   let media = (n1+n2+n3) /3;
   return media;

}

export function tabuada(numero){
    let a = 0;
    for(let i = 0; i <= 10; i++)
    {
        a = numero * i
    }
    return a;
}

export function corPrimaria(cor){
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'
}

export function ingresso(qtdInteira, qtdMeia, diaSemana, nacionalidade){
    if(nacionalidade.toLowerCase() == 'brasiliera')
     return (qtdInteira + qtdMeia ) * 5;
    else if (diaSemana.toLowerCase() == 'quarta')
     return (qtdInteira + qtdMeia) * 14.25;
     
     else 
     return (qtdInteira * 28.5) + (qtdMeia * 14.25);
}

export function frequenciaCaracter(texto, caractere){
    let qtd= 0;
    for(let letra of texto) {
        if (letra == caractere){
            qtd++;

        }
       
         
    }
    return qtd;

}

export function maiorNumero(numeros){
    let maior = Number.MIN_VALUE;
    for (let item of numeros){
        if(item > maior )
        maior = item;
    }
    return maior;
}

