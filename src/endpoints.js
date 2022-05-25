import {Router} from "express"
import { dobro, somar, temperatura, media, tabuada, corPrimaria, ingresso, frequenciaCaracter, maiorNumero } from "./services.js"

const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    const numero = Number(req.params.numero);
     const d = dobro(numero);
   
     resp.send({
        dobro : d
    });
})

server.get('/somar', (req,resp) =>{
    const n1 = Number(req.query.a);
    const n2 = Number(req.query.b);

    const x = somar(n1, n2);

    resp.send({
        soma: x
    });
})

server.post('/somar', (req,resp) =>{
   const n1 = req.body.n1;
   const n2 = req.body.n2;

   const x = somar(n1, n2);

   resp.send({
       soma: x
   });
})

server.get('/temperatura/:numero' , (req,resp) => {
   try{
        const x = Number(req.query.x);

        let febre = temperatura(x);

        resp.send({
            temperatura: febre
        });

   }

   catch(err){
       erro: err.message
   }
})

server.post('/media', (req,resp) =>{
   const n1 = req.body.n1;
   const n2 = req.body.n2;
   const n3 = req.body.n3;
  
   const x = media(n1, n2, n3);

   resp.send({
       media: x
   });
})

server.get('/tabuada/', (req,resp) =>{
    const numero = Number(req.query.numero);

    const x = tabuada(numero)

    resp.send({
        tabuada:x
    });
})

server.get('/dia2/corprimaria/:cor', (req,resp) =>{
    try{
        const {cor} = req.params;
        const primaria = corPrimaria(cor);
        resp.send({
            primaria : primaria
        });

    }
    catch (err) {
        resp.send({
            erro:err.message
        })
    }

})

server.post('/dia2/ingressocinema' , (req, resp) => {
    try{
        const {qtdInteiras, qtdMeias, diaSemana, nacionalidade} = req.body;
        const total = ingresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade);
        resp.send({
            total : total
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req,resp) => {
    try{
        const{texto, caractere} = req.params;
        const freq = frequenciaCaracter(texto,caractere);
        resp.send({
            freq:freq
        })

    }
    catch{
        resp.send({
            erro:err.message
        })
    }
    
})


server.post('/dia2/maiorNumero', (req,resp) => {
    try{
        const numeros = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior:maior
        });
    }
    catch(err){
        resp.send({
            erro :err.message
        })
    }
})


export default server;