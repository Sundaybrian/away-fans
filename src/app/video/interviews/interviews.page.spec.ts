import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterviewsPage } from './interviews.page';

describe('InterviewsPage', () => {
  let component: InterviewsPage;
  let fixture: ComponentFixture<InterviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
