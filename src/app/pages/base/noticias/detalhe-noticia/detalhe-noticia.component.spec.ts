import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNoticiaComponent } from './detalhe-noticia.component';

describe('DetalheNoticiaComponent', () => {
  let component: DetalheNoticiaComponent;
  let fixture: ComponentFixture<DetalheNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
