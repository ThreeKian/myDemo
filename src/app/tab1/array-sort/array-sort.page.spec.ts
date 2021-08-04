import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArraySortPage } from './array-sort.page';

describe('ArraySortPage', () => {
  let component: ArraySortPage;
  let fixture: ComponentFixture<ArraySortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraySortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArraySortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
