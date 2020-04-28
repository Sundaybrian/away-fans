import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTicketPage } from './edit-ticket.page';

describe('EditTicketPage', () => {
  let component: EditTicketPage;
  let fixture: ComponentFixture<EditTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
