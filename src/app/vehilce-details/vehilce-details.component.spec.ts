import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehilceDetailsComponent } from './vehilce-details.component';

describe('VehilceDetailsComponent', () => {
  let component: VehilceDetailsComponent;
  let fixture: ComponentFixture<VehilceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehilceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehilceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
