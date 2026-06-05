// @ts-ignore: Resolve moduleResolution mismatch for test environment
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleComponents } from './theme-toggle';

describe('ThemeToggleComponents', () => {
  let component: ThemeToggleComponents;
  let fixture: ComponentFixture<ThemeToggleComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
