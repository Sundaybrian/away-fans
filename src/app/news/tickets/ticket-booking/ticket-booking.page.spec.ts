import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TicketBookingPage } from './ticket-booking.page';

describe('TicketBookingPage', () => {
  let component: TicketBookingPage;
  let fixture: ComponentFixture<TicketBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TicketBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
