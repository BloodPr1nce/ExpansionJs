import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRestApiComponent } from './http-rest-api.component';

describe('HttpRestApiComponent', () => {
  let component: HttpRestApiComponent;
  let fixture: ComponentFixture<HttpRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpRestApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
