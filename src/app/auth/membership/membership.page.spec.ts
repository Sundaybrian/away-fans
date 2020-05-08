import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipPage } from './membership.page';

describe('MembershipPage', () => {
  let component: MembershipPage;
  let fixture: ComponentFixture<MembershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
