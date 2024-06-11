import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshokComponent } from './ashok.component';

describe('AshokComponent', () => {
  let component: AshokComponent;
  let fixture: ComponentFixture<AshokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
