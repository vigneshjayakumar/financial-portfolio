import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAssetsFormComponent } from './buy-assets-form.component';

describe('BuyAssetsFormComponent', () => {
  let component: BuyAssetsFormComponent;
  let fixture: ComponentFixture<BuyAssetsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyAssetsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAssetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
