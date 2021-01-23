var sueldo=prompt('Ingrese el sueldo del trabajador:','');
sueldo=parseFloat(sueldo);
if (sueldo >= 0 | sueldo <= 1000){  
  aumento = sueldo*0.15 ;
}
if (sueldo >= 1001 | sueldo <= 1200){  
  aumento = sueldo*0.12 ;
}
if (sueldo >= 1201 | sueldo <= 1400){  
  aumento = sueldo*0.10 ;
}
if (sueldo >= 1401 | sueldo <= 1500){  
  aumento = sueldo*0.08 ;
}
if (sueldo >= 1501){  
  aumento = sueldo*0.05 ;
}
alert('El sueldo con el aumento es de: '+ (sueldo + aumento));