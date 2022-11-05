import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccessGroupComponent } from './data-access-group.component';

describe('DataAccessGroupComponent', () => {
  let component: DataAccessGroupComponent;
  let fixture: ComponentFixture<DataAccessGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAccessGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAccessGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
