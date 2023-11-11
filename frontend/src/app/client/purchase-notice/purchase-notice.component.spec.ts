import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNoticeComponent } from './purchase-notice.component';

describe('PurchaseNoticeComponent', () => {
  let component: PurchaseNoticeComponent;
  let fixture: ComponentFixture<PurchaseNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseNoticeComponent]
    });
    fixture = TestBed.createComponent(PurchaseNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
