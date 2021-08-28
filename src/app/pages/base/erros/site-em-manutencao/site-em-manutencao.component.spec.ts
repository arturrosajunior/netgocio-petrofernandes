import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEmManutencaoComponent } from './site-em-manutencao.component';

describe('SiteEmManutencaoComponent', () => {
  let component: SiteEmManutencaoComponent;
  let fixture: ComponentFixture<SiteEmManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteEmManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEmManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
