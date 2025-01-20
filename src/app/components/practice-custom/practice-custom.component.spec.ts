import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCustomComponent } from './practice-custom.component';

describe('PracticeCustomComponent', () => {
  let component: PracticeCustomComponent;
  let fixture: ComponentFixture<PracticeCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
