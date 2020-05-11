import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelPage } from './travel.page';

describe('TravelPage', () => {
  let component: TravelPage;
  let fixture: ComponentFixture<TravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
