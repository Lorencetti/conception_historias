import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFormularioComponent } from './visualizar-formulario.component';

describe('VisualizarFormularioComponent', () => {
  let component: VisualizarFormularioComponent;
  let fixture: ComponentFixture<VisualizarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
