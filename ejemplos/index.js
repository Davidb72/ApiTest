let saludo = process.env.NOMBRE || "Sin Nombre";
let saludop = process.env.NOMBRE || 'Sin nombre';
let ciudad = process.env.CIUDAD || 'Sin ciudad';

console.log(`Hola> ${saludo}`)
console.log(`Soy de> ${ciudad}`)