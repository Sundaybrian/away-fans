import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FixtureDetailPage } from './fixture-detail.page';

describe('FixtureDetailPage', () => {
  let component: FixtureDetailPage;
  let fixture: ComponentFixture<FixtureDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FixtureDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
