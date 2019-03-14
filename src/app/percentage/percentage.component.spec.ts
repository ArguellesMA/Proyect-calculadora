import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PercentageComponent } from './percentage.component';


describe('PercentageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PercentageComponent]
    });
  });

  
  it('el porcentaje 50*100/100=50;',
    inject([PercentageComponent], (service: PercentageComponent) => {
      let subtracao = service.calcular(50, 100,PercentageComponent.PORCENTAJE);
      expect(subtracao).toEqual(50)
    })
    );

    it('Area del recatangulo 30*20=600',
    inject([PercentageComponent], (service: PercentageComponent) => {
      let Area = service.calcular(30, 20, PercentageComponent.RECTANGULO);
      expect(Area).toEqual(600)
    })
    );


    


  });