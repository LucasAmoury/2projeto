 alert('Eae meu bom, tudo joia? Topa jogar o jogo de adivinhações?');
 let numeroMaximo = 500;
 let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
 let jogo;
 let tentativas = 1;
 
 // Enquanto o chute não for igual o n.S.
 while (jogo != numeroSecreto) {
   jogo = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
   //se jogo for igual ao numeroSecreto
      if (jogo == numeroSecreto) {
         break;
      }else {
         if (jogo > numeroSecreto) {
            alert(`O numero secreto e menor que ${jogo}`);
         } else {
            alert(`O numero secreto e maior que ${jogo}`);
         }  
         // tentativas = tentativas + 1;
         tentativas++;
      } 
   }
   
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

   alert(`Acertou mizerávei, você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//    alert(`Acertou mizerávei, você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else {
//  alert(`Acertou mizerávei, você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }