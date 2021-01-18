import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMidComponent } from './header-mid.component';

describe('HeaderMidComponent', () => {
  let component: HeaderMidComponent;
  let fixture: ComponentFixture<HeaderMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
