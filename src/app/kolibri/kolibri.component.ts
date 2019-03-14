
import { Injectable } from '@angular/core';

@Injectable()
export class KolibriComponent {

  static readonly resta: string = '-';
  static readonly circuloarea: string = '*';
  static readonly trianguloarea: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; 

    switch (operacao) {
      case KolibriComponent.resta:
        resultado = num1 - num2;
        break;
      case KolibriComponent.circuloarea:
        resultado = 3.15 * (num1 * num2);
        break;
      case KolibriComponent.trianguloarea:
        resultado = num1 * num2 *2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}