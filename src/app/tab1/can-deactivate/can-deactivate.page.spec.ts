import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanDeactivatePage } from './can-deactivate.page';

describe('CanDeactivatePage', () => {
  let component: CanDeactivatePage;
  let fixture: ComponentFixture<CanDeactivatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDeactivatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanDeactivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
