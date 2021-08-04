import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextPagePage } from './next-page.page';

describe('NextPagePage', () => {
  let component: NextPagePage;
  let fixture: ComponentFixture<NextPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
