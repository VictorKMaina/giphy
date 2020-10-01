import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHomepageComponent } from './trending-homepage.component';

describe('TrendingHomepageComponent', () => {
  let component: TrendingHomepageComponent;
  let fixture: ComponentFixture<TrendingHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
