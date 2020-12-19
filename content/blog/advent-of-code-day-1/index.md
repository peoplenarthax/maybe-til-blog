---
title: Advent of Code Explicado - Dia 1
date: "2020-12-01T00:00:00.000Z"
description: "Los elfos me informan de que la hoja de gastos no esta bien. "
tags: ["programacion"]
---

Para añadir un par de entradas algo más cortas y fáciles de seguir he decidido apuntarme un año más al [Advent of Code](https://adventofcode.com/), para los que no sepan de que se trata, todos los años desde 2015 se realiza este desafío de programación. Se llama así porque se realiza al mismo tiempo que el adviento cristiano, del 1 al 25 de Diciembre y cada día se publica un pequeño problema (hay un poco de historia detrás de cada problema), la dificultad de los problemas se supone que va aumentando según nos acercamos a Navidad.

Con esto dicho, 🔥 ¡Vamos al lio! 🔥

<div class="disclaimer">
Mis respuestas no siempre son las más optimas ni la única manera posible de resolver estos problemas, así que mantened una mente abierta para sacar el máximo provecho de estas entraditas. <a target=¨_blank¨ href=¨https://github.com/peoplenarthax/code-challenges/blob/main/advent-of-code-2020/day-1/index.ts¨>Si solo quieres la solución al problema puedes verlo en mi github</a>
</div>

## El Problema

En este primer día se nos explica que este año hemos decidido ir a una isla tropical que solo acepta metálico. Aprovechan para explicarte que cada día del desafío se pueden ganar dos estrellas (los problemas se dividen en dos partes, normalmente relacionando la solución del primero con el segundo apartado) y que para el día 25 deberás recolectar 50 estrellas. Esto es una mera introducción al desafío.

### Parte 1: Problemas con tus gastos

Parece ser que hay un problema con mi hoja de gastos y que debo **encontrar los dos números de una lista que suman 2020**. Nos dan un ejemplo con seis números `1721, 979, 366, 299, 675, 1456`, se ve fácilmente que `1721 + 299 = 2020`. Lo que ellos quieren es la multiplicación de esos dos números: `1721 * 299 = 514579`.

### Parte 1: solución

Lo más típico es que te den un documento que deberás de alguna manera leer en tu programa, en mi caso estoy usando nodejs con typescript. Siempre que afronto un problema intento dividirlo en varias partes:

- 👩‍💻 **Leer la información que necesito y transformarla a un formato más cómodo**. En este caso uso `fs` para leer línea a línea un fichero que he creado y simplemente lo he transformado para que nos devuelva un array de números (no hago ningún tipo de check porque el enunciado me dice que tipo de información me llega y que hay una solución).


```typescript
// Esta función nos ayuda a quitar los espacios en blanco iniciales y finales del input
// y a transformar texto en un numero de base 10
const trimAndParse = (string: string) => parseInt(string.trim(), 10)

// Forma standard de leer un documento, dividirlo en un array por línea
// y transformar cada entrada del array
const readNumberArrayInput = (fileName: string) : number[] => 
	fs.readFileSync(fileName).toString()
	  .split("\n")
	  .map(trimAndParse)
```

- 📋**Escribir y jugar con el problema en papel (u otro formato)** siempre me ayuda bastante. En este caso la primera solución que se me viene a la cabeza siempre suele ser por fuerza bruta. Sabiendo que hay dos números, pruebo todas las combinaciones con un doble `for loop`. **La fuerza bruta siempre funciona**, pero es una cuestión de eficiencia por la que solemos evitarla. Sin meterme en mucho lio, para este problema la [complejidad](https://es.wikipedia.org/wiki/Complejidad_temporal) sería O(n<sup>2</sup>), si no entiendes que es la complejidad, no hace falta ahora mismo e intentare explicarlo en otro post.

La segunda vez, intente pensar si había una forma de encontrar la solución recorriendo una única vez todo el array (por ende, reduciendo la complejidad a O(n)<sup>*</sup>). Tal vez de la manera en que los números estaban ordenados no sería posible ¿Cómo puedo saber si el número que viene es más grande o viceversa? Pero 💡, **si ordenamos los números ya hay una característica de la información que podemos aprovechar** .

Si tenemos una lista con 4 números `const lista = [3, 2, 4, 1]`, yo no podría garantizar que `lista[0] + lista[3] >= lista[0] + lista[2]`, **cuando la información esta desorganizada, es difícil hacer predicciones sobre los datos**. Pero si en lugar de eso tuviésemos `[4, 3, 2, 1]`, siempre podríamos, porque sé que mi lista tiene un orden decreciente. Aprovechando esto, podemos buscar los dos números que suman 2020 de manera más sencilla que comprobando todas las combinaciones.

El algoritmo es tal que así:
  1. Dado un array de números ordenados de menor a mayor, empezamos comprobando el principio y el final de la lista.
  2. Si el numero de la izquierda más el numero de la izquierda es igual al número que buscamos, tenemos solución 🎆
  3. Si la suma es menor que el número que buscamos, pasamos al siguiente numero de la izquierda ➡ (porque sabemos que el siguiente numero de la izquierda va a ser mayor que el anterior).
  4. Si la suma es mayor, pasamos al siguiente numero de la derecha ⬅.
  5. En el momento en que lleguemos al mismo número por los dos lados significa que no hemos encontrado respuesta.

```typescript
/** 
* sum: el numero que buscamos, 2020 en nuestro caso
* number: array ordenado de todos los numeros en los que buscar
**/
const findPairWithSum = (sum: number, numbers: number[]) : [number, number] | null => {
let leftIndex = 0
let rightIndex = numbers.length - 1

// Los dos indices indican la misma posicion
while (leftIndex < rightIndex) {
	// Hemos encontrado la solución, salimos del bucle
	if (numbers[leftIndex] + numbers[rightIndex] == sum) break

	// La suma es menor que el numero que buscamos
	if (numbers[leftIndex] + numbers[rightIndex] < sum) {
		leftIndex++
	} else {
		rightIndex--
	}
}

// Devolver los dos numeros o null en caso de que no se encuentre
return leftIndex < rightIndex ? [numbers[leftIndex], numbers[rightIndex]] : null
}
```

Con esto, los dos números que devuelve la fórmula se multiplican y ya tendríamos nuestra respuesta.

### Parte 2: Extendiendo el problema y solución

Para extender nuestro problema, ahora nos preguntan por **3 números que sumen 2020**. De nuevo podríamos hacer fuerza bruta, pero la complejidad iría a peor, como ya tenemos la solución para 2, podemos aprovecharla para 3.

En mi caso por cada número:
1. Empezando por izquierda (por la derecha funciona igual) cojo el número y se lo resto a 2020.
2. Con el resultado de la resta, busco dos números en los elementos restantes de la lista, **¡este problema es el mismo que el de la parte 1!** Así que, podemos reusar la función que hemos creado.

```typescript
/** 
* sum: el numero que buscamos, 2020 en nuestro caso
* number: array ordenado de todos los numeros en los que buscar
**/
const findTripleWithSum = (sum: number, numbers: number[]) : [number, number, number] => {
	// Empezando por la izquierda de la lista
	for(let index = 0; index < numbers.length - 2; index++ ) {
		// Encontrar el par que sume 2020 menos el numero actual en el resto de la lista
		const pair = findPairWithSum(SUM - numbers[index], numbers.slice(index + 1))

		// Si existe devolvemos el numero y el par que hemos guardado
		if (pair) {
			return [numbers[index], ...pair]
		}
	}
}
```

Esta solución seria de complejidad mayor que la de buscar el par (porque buscamos un par por cada elemento de la lista que complemente hasta 2020), pero menor que el de la fuerza bruta.

---

Y con esto ya habríamos solucionado el día uno del desafío. Espero que os haya sido de ayuda, podéis comprobar [la solución en mi github](https://github.com/peoplenarthax/code-challenges/blob/main/advent-of-code-2020/day-1/index.ts) y si tenéis alguna duda me podéis contactar en las redes sociales.

<sup>*</sup> Cuando hablo de la complejidad, es solo del algoritmo e ignoro la complejidad de ordenar el array 😉