import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Division } from './division.component'; 


describe('Division', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers:[Division]
  });
});

  it('should be created', inject([Division], (service:Division) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1/4=0.25',
  inject([Division], (service: Division) => {
    let divic = service.calcular(1, 4, Division.DIVISION);
    expect(divic).toEqual(0.25)
  })
);
it('deve garantir que 1*4=4',
  inject([Division], (service: Division) => {
    let mult = service.calcular(1, 4, Division.MULTIPLICACION);
    expect(mult).toEqual(4)
  })
);
it('deve garantir que 1^4=1',
  inject([Division], (service: Division) => {
    let potn = service.calcular(1,1, Division.POTENCIA);
    expect(potn).toEqual(1)
  }));
});
