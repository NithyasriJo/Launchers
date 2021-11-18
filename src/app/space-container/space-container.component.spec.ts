import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceContainerComponent } from './space-container.component';

describe('SpaceContainerComponent', () => {
  let component: SpaceContainerComponent;
  let fixture: ComponentFixture<SpaceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
