import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCommunsComponent } from './no-communs.component';

describe('NoCommunsComponent', () => {
  let component: NoCommunsComponent;
  let fixture: ComponentFixture<NoCommunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCommunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCommunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
