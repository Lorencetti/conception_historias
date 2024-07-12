import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePerguntaComponent } from './template-pergunta.component';

describe('TemplatePerguntaComponent', () => {
  let component: TemplatePerguntaComponent;
  let fixture: ComponentFixture<TemplatePerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatePerguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatePerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
