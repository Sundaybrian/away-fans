import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeaturesPage } from './features.page';

describe('FeaturesPage', () => {
  let component: FeaturesPage;
  let fixture: ComponentFixture<FeaturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
