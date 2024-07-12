import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHistoriaComponent } from './template-historia.component';

describe('TemplateHistoriaComponent', () => {
  let component: TemplateHistoriaComponent;
  let fixture: ComponentFixture<TemplateHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateHistoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
