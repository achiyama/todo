import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalStudyComponent } from './signal-study.component';

describe('SignalStudyComponent', () => {
  let component: SignalStudyComponent;
  let fixture: ComponentFixture<SignalStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalStudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
