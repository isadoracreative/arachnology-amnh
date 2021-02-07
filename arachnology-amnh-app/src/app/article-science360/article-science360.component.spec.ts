import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleScience360Component } from './article-science360.component';

describe('ArticleScience360Component', () => {
  let component: ArticleScience360Component;
  let fixture: ComponentFixture<ArticleScience360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleScience360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleScience360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
