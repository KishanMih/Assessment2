import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassignpComponent } from './userassignp.component';

describe('UserassignpComponent', () => {
  let component: UserassignpComponent;
  let fixture: ComponentFixture<UserassignpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserassignpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserassignpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
