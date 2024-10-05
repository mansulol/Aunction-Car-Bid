import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBidPage } from './add-bid.page';

describe('AddBidPage', () => {
  let component: AddBidPage;
  let fixture: ComponentFixture<AddBidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
