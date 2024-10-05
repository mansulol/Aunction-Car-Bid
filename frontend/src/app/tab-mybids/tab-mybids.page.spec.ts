import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMybidsPage } from './tab-mybids.page';

describe('TabMybidsPage', () => {
  let component: TabMybidsPage;
  let fixture: ComponentFixture<TabMybidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMybidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
