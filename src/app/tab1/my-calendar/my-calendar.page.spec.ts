import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCalendarPage } from './my-calendar.page';

describe('MyCalendarPage', () => {
  let component: MyCalendarPage;
  let fixture: ComponentFixture<MyCalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
