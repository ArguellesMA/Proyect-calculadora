import { Injectable } from '@angular/core';

@Injectable()
export class Division {
/*Define as constantes ultilizadas
  para identificar as operaçoes de calculo*/
  static readonly POTENCIA: string ='^';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLICACION: string = '*';

  constructor() { }
/**
 * Método que calcula operação matematica com
 * dois numeros
 * Suporta as operações soma, subtração, multiplicação
 * e divisão.
 *
 * @param num1 number
 * @param num2 number
 * @param Operacion operação string Operação a ser execultada
 * @return number retorna o resultado da operação
 */
  calcular(num1: number, num2: number, Operacion: string): number {
    let resultado: number; //armazena o resultado da operação

    switch (Operacion) {
      default:
      resultado = 0;
      case Division.DIVISION:
        resultado = num1 / num2;
        break;
      case Division.MULTIPLICACION:
        resultado = num1 * num2;
        break;
      case Division.POTENCIA:
      resultado = num1 * num2 * num1 * num2;
      break;
    }
    return resultado;
  }

}