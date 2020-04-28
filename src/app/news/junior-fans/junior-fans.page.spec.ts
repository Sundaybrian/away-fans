import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuniorFansPage } from './junior-fans.page';

describe('JuniorFansPage', () => {
  let component: JuniorFansPage;
  let fixture: ComponentFixture<JuniorFansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorFansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuniorFansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
