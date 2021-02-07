import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideQuicklinksComponent } from './aside-quicklinks.component';

describe('AsideQuicklinksComponent', () => {
  let component: AsideQuicklinksComponent;
  let fixture: ComponentFixture<AsideQuicklinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideQuicklinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideQuicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
