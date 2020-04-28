import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTicketPage } from './new-ticket.page';

describe('NewTicketPage', () => {
  let component: NewTicketPage;
  let fixture: ComponentFixture<NewTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
