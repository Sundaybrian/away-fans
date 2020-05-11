import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferBookingPage } from './offer-booking.page';

describe('OfferBookingPage', () => {
  let component: OfferBookingPage;
  let fixture: ComponentFixture<OfferBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
