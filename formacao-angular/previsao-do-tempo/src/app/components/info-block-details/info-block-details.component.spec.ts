import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockDetailsComponent } from './info-block-details.component';

describe('InfoBlockDetailsComponent', () => {
  let component: InfoBlockDetailsComponent;
  let fixture: ComponentFixture<InfoBlockDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBlockDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
