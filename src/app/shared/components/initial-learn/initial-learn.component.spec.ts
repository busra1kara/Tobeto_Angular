import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLearnComponent } from './initial-learn.component';

describe('InitialLearnComponent', () => {
  let component: InitialLearnComponent;
  let fixture: ComponentFixture<InitialLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialLearnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
