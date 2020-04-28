import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartialNewsPage } from './partial-news.page';

describe('PartialNewsPage', () => {
  let component: PartialNewsPage;
  let fixture: ComponentFixture<PartialNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartialNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
