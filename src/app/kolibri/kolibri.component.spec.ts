import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { KolibriComponent } from './kolibri.component';


  describe('KolibriComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [KolibriComponent]
      });
    });
  
    it('should be created', inject([KolibriComponent], (service: KolibriComponent) => {
      expect(service).toBeTruthy();
    }));


  it('la resta 5-3=2;',
    inject([KolibriComponent], (service: KolibriComponent) => {
      let resta = service.calcular(5, 3, KolibriComponent.resta);
      expect(resta).toEqual(2)
    })
  );
  it('debe calcular el area de un circulo 3.15*4^2=50.4',
    inject([KolibriComponent], (service: KolibriComponent) => {
      let circuloarea = service.calcular(4, 4, KolibriComponent.circuloarea);
      expect(circuloarea).toEqual(50.4)
    })
  );
   it('debe calcular el area de un triangulo (5*8)/2=20',
    inject([KolibriComponent], (service: KolibriComponent) => {
      let trianguloarea = service.calcular(5, 8, KolibriComponent.trianguloarea);
      expect(trianguloarea).toEqual(20)
    })

  );
  
});
