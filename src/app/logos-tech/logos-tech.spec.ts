import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosTech } from './logos-tech';

describe('LogosTech', () => {
  let component: LogosTech;
  let fixture: ComponentFixture<LogosTech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosTech],
    }).compileComponents();

    fixture = TestBed.createComponent(LogosTech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
