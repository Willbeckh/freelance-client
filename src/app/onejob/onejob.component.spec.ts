import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnejobComponent } from './onejob.component';

describe('OnejobComponent', () => {
  let component: OnejobComponent;
  let fixture: ComponentFixture<OnejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnejobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
