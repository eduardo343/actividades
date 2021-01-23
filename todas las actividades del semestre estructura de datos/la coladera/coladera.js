let numeros = new Array()
 
for(let i = 0; i <= 1000; i++ ){
    numeros[i] = 1
}
for (let i = 2; i <=1000; i++) {
    if(numeros[i]===1)
//       for (let j=i+1;j<=1000;j++)
//           if(j%i==0) numeros[i]=0
       for (let j = 2; (i * j) < 1000; j++) 
	     numeros[j*i]=0;
            j=3
            i=3
   
} 
