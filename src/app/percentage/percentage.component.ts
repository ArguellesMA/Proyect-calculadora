import { Injectable } from '@angular/core';

  @Injectable()
  export class PercentageComponent {
  /*Define as constantes ultilizadas
    para identificar as operaçoes de calculo*/
  
    static readonly PORCENTAJE: string = '*,/';
    static readonly RECTANGULO: string = '*';
    
  
    constructor() { }
  /**
   * Método que calcula operação matematica com
   * dois numeros
   * Suporta as operações soma, subtração, multiplicação
   * e divisão.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao operação string Operação a ser execultada
   * @return number retorna o resultado da operação
   */
    calcular(num1: number, num2: number, operacao: string): number {
      let resultado: number; //armazena o resultado da operação
  
      switch (operacao) {
        case PercentageComponent.PORCENTAJE:
          resultado = num1 * num2 / 100;
          break;

        case PercentageComponent.RECTANGULO:
          resultado = num1 * num2 ;
          break;

      }
      return resultado;
    }
    }