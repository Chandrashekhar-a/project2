import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstartComponent } from './productstart.component';

describe('ProductstartComponent', () => {
  let component: ProductstartComponent;
  let fixture: ComponentFixture<ProductstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
