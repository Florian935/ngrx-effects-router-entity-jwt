import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOnePostComponent } from './detail-one-post.component';

describe('DetailOnePostComponent', () => {
  let component: DetailOnePostComponent;
  let fixture: ComponentFixture<DetailOnePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOnePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOnePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
