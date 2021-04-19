import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontactosComponent } from './ccontactos.component';

describe('CcontactosComponent', () => {
  let component: CcontactosComponent;
  let fixture: ComponentFixture<CcontactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcontactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
