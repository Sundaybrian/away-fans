import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenPage } from './men.page';

describe('MenPage', () => {
  let component: MenPage;
  let fixture: ComponentFixture<MenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
