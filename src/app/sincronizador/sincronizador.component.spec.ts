import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronizadorComponent } from './sincronizador.component';

describe('SincronizadorComponent', () => {
  let component: SincronizadorComponent;
  let fixture: ComponentFixture<SincronizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SincronizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SincronizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
