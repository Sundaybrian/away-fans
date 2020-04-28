import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FixturesPage } from './fixtures.page';

describe('FixturesPage', () => {
  let component: FixturesPage;
  let fixture: ComponentFixture<FixturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FixturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
