import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPaginaFooterComponent } from './banner-pagina-footer.component';

describe('BannerPaginaFooterComponent', () => {
  let component: BannerPaginaFooterComponent;
  let fixture: ComponentFixture<BannerPaginaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPaginaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPaginaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
