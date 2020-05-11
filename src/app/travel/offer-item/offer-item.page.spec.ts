import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferItemPage } from './offer-item.page';

describe('OfferItemPage', () => {
  let component: OfferItemPage;
  let fixture: ComponentFixture<OfferItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
