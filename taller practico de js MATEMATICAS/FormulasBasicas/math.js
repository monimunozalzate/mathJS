// console.group('cuadrado');
// --------------CUADRADO ---------------
const ladoCuadraro = 5;
const perimetroCuadrado = ladoCuadraro * 4 + "cm";
const areaCuadrado = ladoCuadraro * ladoCuadraro + "cm";

function calcularPerimetroAreaCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}
// console.log(
{
  ladoCuadraro, perimetroCuadrado, areaCuadrado;
}
// );
// console.groupEnd('cuadrado');

// --------------------- TRIANGULO --------------------------------------------------
// console.group('triangulo');

const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

// console.log({
perimetroTriangulo, areaTriangulo;
// });

function calcularPerimetroAreaTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}
// console.groupEnd('triangulo');

// ----------------------------- CIRCULO ----------------------------------
// console.group('circulo')
const radioCirculo = 3;
const diametro = radioCirculo * 2;

const perimetroCircunferencia = diametro * Math.PI;
const areaCirculo = radioCirculo ** 2 * Math.PI;

// console.log({
perimetroCircunferencia, areaCirculo;
// });

function calcularCircunferenciaAreaCirculo(radioCirculo) {
  return {
    circunferencia: radioCirculo * 2 * Math.PI,
    area: radioCirculo ** 2 * Math.PI,
  };
}

// console.groupEnd('circulo')

// ------------------- TRIANGULO ISOSCELES --------------------------------------------------------------
//  h= raizCuadrada a**2 - b**2/4
// triangulo isosceles 2 lados iguales
// console.group('trianguloIsosceles');

function calcularAlturaTrianguloIsosceles(lado, base) {
  if (lado == base) {
    console.warn("este no es un triangulo isosceles");
  } else {
    return Math.sqrt(lado ** 2 - base ** 2 / 4);
  }
}

console.groupEnd("trianguloIsosceles");

// ---------------- TRIANGULO ESCALENO ---------------------------
// altura=2/ladoA raizCuadrada S(S-ladoA)(S-ladoB)(S-ladoC)
// S=ladoA+ladoB+ladoC/2
// console.group('escaleno')
function calcularAlturaTrianguloEscaleno(ladoA, ladoB, ladoC) {
  const semiPerimetro = (ladoA + ladoB + ladoC) / 2;
  const raizCuadrada = Math.sqrt(
    semiPerimetro *
      (semiPerimetro - ladoA) *
      (semiPerimetro - ladoB) *
      (semiPerimetro - ladoC)
  );
  const result = (2 / ladoA) * raizCuadrada;
  return result;
}
// console.groupEnd('escaleno');

// -----------PORCENTAJES--------------------------------------------------
// PRECIO * (100 - DESCUENTO)/100

const precio = document.querySelector("#precio");
const descuento = document.querySelector("#descuento");
const pResult = document.querySelector("#resultado");
const btn = document.querySelector("#btnCalcular");
const ganancia = document.querySelector("#ganancia");

function descontar(e) {
  // console.log(e);
  e.preventDefault();

  if (!precio.value || !descuento.value) {
    pResult.innerText = "Ingrese un valor valido en Precio";
    // ganancia.innerText = "Ingrese un valor valido en Descuento";
    return;
  }
  if (descuento.value >= 100) {
    pResult.innerText = "Ese tipo de ganancias no existen!";
    return;
  }

  const result =
    (parseInt(precio.value) * (100 - parseInt(descuento.value))) / 100;
  pResult.innerText = "El valor a pagar es de $" + result;
  // console.log(precio.value)
  ganancia.innerText = "Se ahorro $" + (parseInt(precio.value) - result);
}
btn.addEventListener("click", descontar);

// ---------CUPONES---------------------------------------
const btnPersonal = document.querySelector(".personal");
const btnCouple = document.querySelector(".couple");
const btnFamily = document.querySelector(".family");
const price = document.querySelector("#price");
const resultado = document.querySelector(".result");

const priceInput = price.value;

btnPersonal.addEventListener("click", activarCupon);
btnCouple.addEventListener("click", activarCupon);
btnFamily.addEventListener("click", activarCupon);

function activarCupon(e, key) {
  e.preventDefault();
  //   console.log(e)
  // console.log(price.value)

  let result;

  switch (key) {
    case btnPersonal:
      result = (parseInt(priceInput) * 0.25);
      resultado.innerText = "El valor a pagar es $" + result;
      console.log(result)
      break;
    case btnCouple:
      result = (parseInt(priceInput) * 0.35);
      resultado.innerText = "El valor a pagar es $" + result;
      break;
    case btnFamily:
      result = (parseInt(priceInput) * 0.45);
      resultado.innerText = "El valor a pagar es $" + result;
      break;
  }
}
