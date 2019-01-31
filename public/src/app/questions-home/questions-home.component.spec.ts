import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsHomeComponent } from './questions-home.component';

describe('QuestionsHomeComponent', () => {
  let component: QuestionsHomeComponent;
  let fixture: ComponentFixture<QuestionsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
