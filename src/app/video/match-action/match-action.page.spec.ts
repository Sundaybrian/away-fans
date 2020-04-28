import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchActionPage } from './match-action.page';

describe('MatchActionPage', () => {
  let component: MatchActionPage;
  let fixture: ComponentFixture<MatchActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchActionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
