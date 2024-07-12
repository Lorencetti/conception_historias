import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarHistoriaComponent } from './montar-historia.component';

describe('MontarHistoriaComponent', () => {
  let component: MontarHistoriaComponent;
  let fixture: ComponentFixture<MontarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontarHistoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MontarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
