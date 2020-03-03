import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSwatchComponent } from './add-swatch.component';

describe('AddSwatchComponent', () => {
  let component: AddSwatchComponent;
  let fixture: ComponentFixture<AddSwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
