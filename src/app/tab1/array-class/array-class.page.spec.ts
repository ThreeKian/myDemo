import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrayClassPage } from './array-class.page';

describe('ArrayClassPage', () => {
  let component: ArrayClassPage;
  let fixture: ComponentFixture<ArrayClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
