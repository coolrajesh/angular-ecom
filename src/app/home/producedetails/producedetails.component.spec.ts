import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducedetailsComponent } from './producedetails.component';

describe('ProducedetailsComponent', () => {
  let component: ProducedetailsComponent;
  let fixture: ComponentFixture<ProducedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
