import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSavesPage } from './tab-saves.page';

describe('TabSavesPage', () => {
  let component: TabSavesPage;
  let fixture: ComponentFixture<TabSavesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
