import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAppPage } from './movies-app.page';

describe('MoviesAppPage', () => {
  let component: MoviesAppPage;
  let fixture: ComponentFixture<MoviesAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
