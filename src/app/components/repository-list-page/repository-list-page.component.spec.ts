import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListPageComponent } from './repository-list-page.component';

describe('RepositoryListPageComponent', () => {
  let component: RepositoryListPageComponent;
  let fixture: ComponentFixture<RepositoryListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryListPageComponent]
    });
    fixture = TestBed.createComponent(RepositoryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
