import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassivefcPage } from './massivefc.page';

describe('MassivefcPage', () => {
  let component: MassivefcPage;
  let fixture: ComponentFixture<MassivefcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassivefcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassivefcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
