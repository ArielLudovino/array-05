const seniales = getSeniales();


const secuenciaCuadrantes = obtenerSecuencia(seniales);


console.log('Secuencia de cuadrantes:', secuenciaCuadrantes);


const ciclosCompletos = contarCiclos(secuenciaCuadrantes);
console.log('Cantidad de ciclos completos:', ciclosCompletos);


const porcentajeN = calcularPorcentajeCuadrante(secuenciaCuadrantes, 'N');
const porcentajeS = calcularPorcentajeCuadrante(secuenciaCuadrantes, 'S');
const porcentajeE = calcularPorcentajeCuadrante(secuenciaCuadrantes, 'E');
const porcentajeO = calcularPorcentajeCuadrante(secuenciaCuadrantes, 'O');

console.log('Porcentaje de ocurrencias de cuadrantes:');
console.log('Norte:', porcentajeN.toFixed(2) + '%');
console.log('Sur:', porcentajeS.toFixed(2) + '%');
console.log('Este:', porcentajeE.toFixed(2) + '%');
console.log('Oeste:', porcentajeO.toFixed(2) + '%');
