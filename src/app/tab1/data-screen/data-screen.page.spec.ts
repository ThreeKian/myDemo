import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataScreenPage } from './data-screen.page';

describe('DataScreenPage', () => {
  let component: DataScreenPage;
  let fixture: ComponentFixture<DataScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
