import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portee } from './portee';

describe('Portee', () => {
  let component: Portee;
  let fixture: ComponentFixture<Portee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
