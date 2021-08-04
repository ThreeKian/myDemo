import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackRefreshPage } from './back-refresh.page';

describe('BackRefreshPage', () => {
  let component: BackRefreshPage;
  let fixture: ComponentFixture<BackRefreshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackRefreshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackRefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
