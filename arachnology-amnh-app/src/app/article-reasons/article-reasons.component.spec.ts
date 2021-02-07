import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReasonsComponent } from './article-reasons.component';

describe('ArticleReasonsComponent', () => {
  let component: ArticleReasonsComponent;
  let fixture: ComponentFixture<ArticleReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleReasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
