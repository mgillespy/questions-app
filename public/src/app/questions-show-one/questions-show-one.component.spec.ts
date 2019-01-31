import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsShowOneComponent } from './questions-show-one.component';

describe('QuestionsShowOneComponent', () => {
  let component: QuestionsShowOneComponent;
  let fixture: ComponentFixture<QuestionsShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
