import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRelatedProjectsComponent } from './aside-related-projects.component';

describe('AsideRelatedProjectsComponent', () => {
  let component: AsideRelatedProjectsComponent;
  let fixture: ComponentFixture<AsideRelatedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideRelatedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRelatedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
