import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbercioComponent } from './abercio.component';

describe('AbercioComponent', () => {
  let component: AbercioComponent;
  let fixture: ComponentFixture<AbercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
